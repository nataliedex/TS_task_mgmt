learning to create a file in TypeScript 

This project creates a list of tasks using both the Todoist API and MongoDB. 

npm the following dependencies to get started: 
 "dependencies": {
    "@doist/todoist-api-typescript": "^5.0.1",
    "dotenv": "^16.5.0",
    "ejs": "^3.1.10",
    "express": "^5.1.0",
    "mongoose": "^8.16.0",
    "node": "^24.2.0",
    "node-fetch": "^3.3.2",
    "path": "^0.12.7",
    "url": "^0.11.4"
  },
  "devDependencies": {
    "@types/dotenv": "^8.2.3",
    "@types/express": "^5.0.3",
    "@types/mongoose": "^5.11.97",
    "@types/node": "^24.0.3"
  },

setup a .env file with the following information: 
  
PORT = 3000
DB_STRING = 
TODOIST_API_TOKEN = 