const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./config/db');
const bookingRoutes = require('./routes/bookingRoutes');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');
const app = express();
const swaggerJsdoc = require('swagger-jsdoc');

// Connect to the database
connectDB();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Swagger setup
const swaggerOptions = {
    swaggerDefinition: {
      openapi: '3.0.0', // Specify the OpenAPI version
      info: {
        title: 'FAS Logistics Courier API', // Title of the API
        version: '1.0.0', // Version of the API
        description: 'API for booking deliveries', // Description of the API
      },
      servers: [
        {
          url: 'http://localhost:5000', // Replace with your server URL
          description: 'Development server', // Optional description
        },
      ],
    },
    apis: ['./src/routes/*.js'], // Path to the API routes files that you want to document
  };

  
  const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Routes
app.use('/api', bookingRoutes);

module.exports = app;
