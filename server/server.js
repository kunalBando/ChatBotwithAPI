import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import axios from 'axios';
import { Configuration, OpenAIApi } from "openai";

dotenv.config();

const port = 5000;

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const app = express();
app.use(cors());
app.use(express.json());

const fetchEntityNames = async () => {
    try {
        // Replace 'YOUR_DOTNET_API_ENDPOINT' with the actual endpoint of your .NET Core API
        const response = await axios.get('http://localhost:5062/api/Entity/GetAllEntities');


        const entityNames = response.data.map(entity => entity.entityName);

        return entityNames;
        
        // Assuming the API response contains an array of entity names
        //return response.data;
        
    } catch (error) {
        throw error;
    }
};

app.get('/', async (req, res) => {
    res.status(200).send({
        message: 'Hello! The API server is up and running.',
    })
});

app.post('/', async (req, res) => {
    try {
        const prompt = req.body.prompt.toLowerCase();

        if (prompt.includes('hello') || prompt.includes('hi')) {
            res.status(200).send({
                bot: 'Hello! How can I help you?',
            });
        } else if (prompt.includes('entity') || prompt.includes('available entities') || prompt.includes('entities')){
            // Fetch entity names from the .NET Core API
            const entityNames = await fetchEntityNames();
            console.log(entityNames);
            res.status(200).send({
                bot: 'Here are the available entity names: ' + entityNames.join(', '),
            });
        } else {
            // Handle other types of queries or prompts
            // Add more conditional statements as needed
            const response = await openai.createCompletion({
                model: "text-davinci-003",
                prompt: `${prompt}`,
                temperature: 0,
                max_tokens: 3000,
                top_p: 1,
                frequency_penalty: 0.5,
                presence_penalty: 0,
            });
    
            res.status(200).send({
                bot: response.data.choices[0].text
            });
        }

    } catch (error) {
        console.error(error);
        res.status(500).send({ error: 'Internal Server Error' });
    }
})

app.listen(port,
    () => console.log(`Server is running on http://localhost:${port}`)
);