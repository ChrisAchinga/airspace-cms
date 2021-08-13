const swaggerConfig = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'AirSpace Next API',
      version: '0.0.1',
      description: 'A simle API for aviation data',
      license: {
        name: 'MIT',
        url: 'https://spdx.org/licenses/MIT.html',
      },
      contact: {
        name: 'Chris Achinga',
        url: 'https://github.com/achingachris',
        email: 'achinga.chris@gmail.com',
      },
    },
    servers: [
      {
        url: 'http://localhost:8000/airlines',
        description: 'Local Server'
      },
    ],
    tags: [
      {
        name: "Airlines API Operations", // name of a tag
      },
    ],
  },
  apis: ['../routes/airlineRoutes.js'],
}

export default swaggerConfig
