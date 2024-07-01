## Project Name

Edu Care Chemnitz


# Edu Care Chemnitz
A web application Where people can find educational facilities located in chemnitz. This website built with React, Node.js, Experess & Mongodb.

## Project Status

This project still undergoing on development.There are lot of places to improvemnet.

## Project Description and Key Features

      1.  From Home page people can find school, kindergarten, child and teenager care facilities.
      2.  It is an interactive map application
      3.  People can sign up and mark facilities as favorites
      4.  API based application
      5.  Json data was imported directly from open data portal

## Tech Stack

      React, Express.Js, Node.Js, MongoDB, Vite,TailwindCss,DaizyUI, Leaflet.js

## Installation and Setup Instructions

This guide will help you set up the project locally on your machine.

## Prerequisites

Before you begin, ensure you have the following installed:

- Git
- Node.js and npm

## Getting Started

Follow these steps to get your development environment set up:

1. Clone the repository

First, clone the project repository to your local machine using Git:

git clone <repository-url>

2. **Install dependencies**
   Navigate to the project directory and install the required npm packages:

1. backend

- `cd backend`
- `npm install`
- `npm run dev`

2. frontend

- `cd frontend`
- `npm install`
- `npm run dev`

3. **Environment Setup**

After installing the packages, you need to set up environment variables for the app to function correctly:

- Create a `.env` file in the root directory of backend folder (where the `package.json` file is located).

- Add the following environment variables to the `.env` file:

  ```
  PORT=
  MONGO_URL=
  SECRET_KEY=

  ```

- MONGO_URL will look like this `mongodb+srv://<username>:<password>@educareapp.alfmwh9.mongodb.net/<AddDatabaseName>?retryWrites=true&w=majority&appName=<GiveAName>`
- Replace `<username>` with username and so on.

### Important Reminder

Ensure that your `.env` file is listed in the `.gitignore` file to prevent committing sensitive information to your Git repository by mistake.

### Running the App

Once the setup is complete, you can start the development server by running:

- `npm run dev`

This will run the app in development mode. Open `http://localhost:5173` to view it in your browser.