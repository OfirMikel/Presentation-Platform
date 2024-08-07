Sure! Here's the updated README template with a "File Structure" section:

---

# Project Name

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies](#technologies)
- [File Structure](#file-structure)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Error Handling](#error-handling)

## Introduction

A brief description of your project and its purpose.

## Features

- Creating a New Presentation 
- Fetch a Presentation by Title (Title is unique)
- Adding a Slide to a Presentation
- Altering a Slide - Altering the Authors List 
- Deleting a Slide 
- Delete Presentation 
- Get All Presentations

## Technologies

- **Node.js**: JavaScript runtime
- **Express**: Web framework for Node.js
- **MongoDB**: NoSQL database
- **Mongoose**: MongoDB object modeling tool

## File Structure

```
presentation-platform/
│
├── models/
│   └── Presentation.js           # Presentation model schema
│   └── Slide.js                  # Slide model schema
│
├── routes/
│   ├── delete
│   │   └── deletePresentation.js      # methods for deleting a Presentation
│   │   └── deleteSlide.js             # methods for deleting a Slide
│   ├── get
│   │   └── getAllPresentions.js       # methods for reciving all Presentations
│   │   └── getByTitle.js              # methods for reciving a specifc Presentation
│   ├── patch
│   │   └── patchAuthors.js            # methods for changing a Presentation list of authors
│   │   └── patchSlide.js              # methods for changing a Slide
│   ├── post
│   │   └── postPresentation.js        # methods for creating a new Presentation
│   │   └── postSlide.js               # methods for creating a new Slide
│   └── routes.js                      # registering routes for Presentation management
│
├── .env                               # Environment variables --only local--
├── .gitignore                         # Git ignore file
├── index.js                           # Express app setup
├── test.postman_collection.json       # Express app setup
├── package.json                       # NPM dependencies and scripts
└── README.md                          # Project documentation
```

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/OfirMikel/Presentation-Platform.git
    ```

2. Navigate to the project directory:

    ```bash
    cd presentation-platform
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

**Alternatively**, use the provided zip file and start from step 2.

## Configuration

1. Create a `.env` file in the root of your project.

2. Add the following environment variables to your `.env` file:

    ```env
    PORT=3000
    MONGO_URI=mongodb://localhost:27017/yourdbname
    ```
Disclaimer **yourdbname** is the db name that u should provide
## Usage

1. Start the server:

    ```bash
    npm start
    ```

2. The API will be available at : ``http://localhost:3000.``

## API Endpoints

### Presentation

- **GET /presentations**: Get all presentation
- **GET /presentations/:title**: Get presentation by Title
- **POST /users**: Create a new presentation
- **PATCH /presentation/authors/:title**: Update a presentation author list by Title
- **DELETE /presentation/:title**: Delete a presentation by Title

### Slide

- **POST /slide**: Create a new slide
- **PATCH /slide/:id**: Update a slide by ID 
- **DELETE /slide/:id**: Delete a slide by ID

## Error Handling

Standard error responses:

- **400 Bad Request**: The request could not be understood or was missing required parameters.
- **404 Not Found**: The DataBase wasn't found.

## TESTING
I conducted multiple tests using Postman, MongoDB Compass, and the MongoDB Shell.
therefore I provided the collection file for Postman.
## Postman
1. Import Collection: Import the provided Postman collection (Assignment.postman_collection) into Postman.

2. Environment Variables: Set up environment variables in Postman for base_url and other necessary variables.

3. Run Requests: Execute requests to test API endpoints. Verify responses for correctness and expected behavior.
