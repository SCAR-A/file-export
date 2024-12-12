import swaggerJsdoc from 'swagger-jsdoc';
import { join } from 'path';

const options: swaggerJsdoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Express API with Swagger',
      version: '1.0.0',
      description: 'API documentation using Swagger/OpenAPI 3.0',
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Development server',
      },
    ],
    components: {
      schemas: {
        User: {
          type: 'object',
          properties: {
            id: {
              type: 'string',
              format: 'uuid'
            },
            username: {
              type: 'string'
            },
            nickname: {
              type: 'string'
            },
            avatarUrl: {
              type: 'string'
            },
            bio: {
              type: 'string'
            },
            status: {
              type: 'integer',
              enum: [1, 2]
            },
            registerSource: {
              type: 'integer',
              enum: [1, 2, 3, 4]
            },
            lastLoginAt: {
              type: 'string',
              format: 'date-time'
            },
            createdAt: {
              type: 'string',
              format: 'date-time'
            },
            updatedAt: {
              type: 'string',
              format: 'date-time'
            }
          }
        },
        UserCreate: {
          type: 'object',
          required: ['username', 'password'],
          properties: {
            username: {
              type: 'string'
            },
            password: {
              type: 'string',
              format: 'password'
            },
            nickname: {
              type: 'string'
            },
            avatarUrl: {
              type: 'string'
            },
            bio: {
              type: 'string'
            }
          }
        },
        UserUpdate: {
          type: 'object',
          properties: {
            nickname: {
              type: 'string'
            },
            avatarUrl: {
              type: 'string'
            },
            bio: {
              type: 'string'
            },
            status: {
              type: 'integer',
              enum: [1, 2]
            }
          }
        }
      },
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
  },
  apis: [
    join(__dirname, '../routes/*.ts'),
    join(__dirname, '../swagger/*.ts')
  ],
};

export const swaggerSpec = swaggerJsdoc(options); 