# FeatureMarketplaceChatBot
-- Created By --
* Kunal Bandyopadhyay

## Overview
This repository contains the code for chatbot built using HTML, JavaScript, and hosted on Azure for Feature Marketplace WebApp. The chatbot communicates with a Node.js server to generate responses using the OpenAI GPT-3.5 Turbo model, predefined responses to certain Keywords and external APIs to fetch real-time data about the website.

## Features

- User-friendly chat interface.
- Integration with OpenAI GPT-3.5 Turbo for intelligent responses.
- Buttons for predefined prompts.
- Fetches Entities and Features for Entities from the database in real time whenever user requests.
- Gives information about the website and assists users with website usage.

## Code Structure
- index.html: The main HTML file containing the chatbot interface.
- script.js: JavaScript code for handling user input, making server requests, and updating the UI.
- style.css: Stylesheet for the chatbot interface.

## New Learning Values
* Integration with OpenAI API: 
- Learnt API key generation in OpenAI.
- Familiarized with OpenAI documentaion about various available chat models to choose the best for our usecase.
- Understood how to structure API requests and handle responses.
- Learnt the importance of securing the API key and changed code visibility from public to private

* Frontend Development: 
- Aimed for intuitive abd clean design for user ease.
- Added buttons with predefined prompts for effortless user interaction.
- Considered color schemes, fonts, and visual elements to create a visually appealing and cohesive design.
- Ensured responsiveness across various devices, especially on mobile as responsive design enhances the user experience.
- Added loading animation and text by text typing for bot responses.
- Anticipated and gracefully handled errors by providing meaningful error messages to guide users in case of input issues.

* Natural Language Processing:
- Used keywords recognition in prompts to designate appropriate responses.
- Used Regular expressions for matching prompt patterns and recognise entity name when fetching for features.

* Serverside Programming:
- Used express and defined middleware for CORS and JSON parsing.
- Fetching data from external APIs for real time information on Entities and features.
- Used Try-Catch Mechanism, Error Propagation and gave Error Response to Client for better error handling.
- Used dotenv package to load API key from a .env file thus enhancing security by keeping sensitive information separate from the codebase and version control.

## Future Enhancements
- Implement more advanced conversation flows.
- Improve UI/UX design.
- Add support for multiple languages.

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
https://nice-sky-08aa0150f.4.azurestaticapps.net/


