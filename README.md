# FAS Logistics Courier App Backend

This repository contains the backend code for the FAS Logistics Courier App, developed using Node.js, Express.js, MongoDB, and integrated with Swagger for API documentation.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
  - [Running the Application](#running-the-application)
- [API Documentation](#api-documentation)
- [Testing](#testing)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js and npm (or yarn)
- MongoDB
- Git

## Getting Started

### Installation

1. Clone the repository:
   ```bash
   git clone git@github.com:Hassanafridi27/logistics-be-test.git
   cd logistics-be-test

2. Install dependencies:
   npm install
   
**Environment Variables**
Create a .env file in the root directory of the project with the following variables:
# .env file
PORT=5000
MONGO_URI=<your_mongodb_connection_string>
Replace <your_mongodb_connection_string> with your MongoDB connection URI.

**Running the Application**
Start the application in development mode:
npm run dev
The server will start at http://localhost:5000.

**API Documentation**
API endpoints are documented using Swagger. Access the Swagger UI to interactively explore the API:
Swagger UI: http://localhost:5000/api-docs

**Testing**
Run unit tests using Jest:
npm test

**Folder Structure**
The project structure follows:
/src
  /controllers    # Express route controllers
  /models         # Mongoose models
  /routes         # Express routes
  /test           # Unit tests
  /utils          # Utility functions
