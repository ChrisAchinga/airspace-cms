const swaggerConfig = {
  definition: {
    openapi: '3.0.0',
    // basic API information
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
    // server details
    servers: [
      {
        url: 'http://localhost:8000/airlines',
        description: 'Local Server',
      },
    ],
    // documentation tags
    tags: [
      {
        name: 'Airlines API Operations', // name of a tag
      },
    ],
    // API components
    components: {
      schemas: {
        // airline model
        Airline: {
          type: 'object',
          properties: {
            id: {
              type: 'number',

              description: 'Airline unique identification',
              example: 52,
            },
            name: {
              type: 'string',

              description: 'Name of the airline',
              example: 'Kenya Airways',
            },
            slug: {
              type: 'string',
              description: 'Airline name slug used in urls',
              example: 'kenya-airways',
            },
            alliance: {
              type: 'string',
              description: 'Alliance to which the airline is a member of',
              example: 'Sky Team',
            },
            iata: {
              type: 'string',
              description:
                'International Air Transport Association (IATA) code for the airline',
              example: 'KQ',
            },
            icao: {
              type: 'string',
              description:
                'International Civil Aviation Organization (ICAO) code for the airline',
              example: 'KQA',
            },
            country: {
              type: 'string',
              description: 'Country of origin og the airlines',
              example: 'Kenya',
            },
            logo: {
              type: 'string',
              description: 'image src path to airline logo',
            },
            website: {
              type: 'string',
              description: 'website address of the airline',
            },
          },
          
        },
        // aircraft model
        Aircraft: {
          type: 'object', // data type
          properties: {
            title: {
              type: 'string', // data type
              description: "Todo's title", // desc
              example: 'Coding in JavaScript', // example of a title
            },
            completed: {
              type: 'boolean', // data type
              description: 'The status of the todo', // desc
              example: false, // example of a completed value
            },
          },
        },
      },
    },
    // methods
    
  },
  apis: ['../routes/airlineRoutes.js'],
}

export default swaggerConfig
