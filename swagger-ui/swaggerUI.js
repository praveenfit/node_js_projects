const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

// Swagger configuration options
const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'Books API',
            version: '1.0.0',
            description: 'API for managing books',
            contact: {
                name: 'Praveen',
            },
            servers: [
                {
                    url: 'http://localhost:5000',
                    description: 'Local server'
                }
            ]
        }
    },
    apis: ['./routes/*.js', './model/*.js'], // Paths to files where you define your endpoints and schemas
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

module.exports = { swaggerDocs, swaggerUi };
