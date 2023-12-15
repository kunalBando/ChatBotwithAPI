# OpenAIChatBot
-- Created By --
* Kunal Bandyopadhyay

## Overview
This repository contains the code for a simple chatbot built using HTML, JavaScript, and hosted on Azure. The chatbot communicates with a Node.js server to generate responses using the OpenAI GPT-3.5 Turbo model.

## Features

- User-friendly chat interface.
- Integration with OpenAI GPT-3.5 Turbo for intelligent responses.
- Buttons/pills for predefined prompts.
- ... (add more features as needed)

## Code Structure
- index.html: The main HTML file containing the chatbot interface.
- script.js: JavaScript code for handling user input, making server requests, and updating the UI.
- style.css: Stylesheet for the chatbot interface.

## New Learning Values
- Integration with OpenAI API: Discuss the process of integrating the OpenAI GPT-3.5 Turbo model into your project.
- Frontend Development: Share your experiences and learning points related to building a user-friendly chat interface.
- Asynchronous JavaScript: Highlight any challenges faced and lessons learned when dealing with asynchronous operations in JavaScript.

## How to setup project locally
* Clone the app using ```git clone https://github.com/kunalBando/ChatBotwithAPI.git```

## Running Client Side
* Redirect into project folder ```cd /<your-project-folder>/client```
* Install node modules ```npm install```
* Run client ```npm run dev```

## Running Server Side
* Redirect into project folder ```cd /<your-project-folder>/server```
* Install node modules ```npm install```
* Create .env file using ```cp .env.example .env```
* Add your OpenAI Api key at the relant environment key. (more info at https://openai.com/api/)
* Run client ```npm run server```

## Live Demo
* **You can see the live demo using this link :**
https://open-ai-chat-bot-delta.vercel.app/

## Future Enhancements
- Implement more advanced conversation flows.
- Improve UI/UX design.
- Add support for multiple languages.
