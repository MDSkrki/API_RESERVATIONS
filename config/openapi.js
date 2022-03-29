const swDocument = {
  openapi: "3.0.1",
  info: {
    title: "Api Reservations of Dental Clinic",
    description: "Este es un ejemplo sobre la creación de un TODOLIST",
    contact: {
      name: "Developers",
      email: ["alex_bcn10@hotmail.es", "somkereki@hotmail.com"],
    },
    version: "0.1.0",
  },
  tags: [
    {
      name: "User",
      description: "User planificadas",
    },
  ],
  paths: {
    "/User": {
      get: {
        tags: ["User"],
        summary: "Get Users",
        description: "Return all Users",
        requestHeaders: {
            description: "Objeto tarea para añadir a las User",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Tarea",
                },
              },
            },
            required: true,
          },
        responses: {
          200: {
            description: "successful operation",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/User",
                },
              },
            },
          },
          400: {
            description: "Invalid ID supplied",
            content: {},
          },
          404: {
            description: "Pet not found",
            content: {},
          },
        },
        security: [
          {
            api_key: [],
          },
        ],
      },
      post: {
        tags: ["User"],
        summary: "Añade una nueva tarea",
        requestBody: {
          description: "Objeto tarea para añadir a las User",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Tarea",
              },
            },
          },
          required: true,
        },
        responses: {
          200: {
            description: "successful operation",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/User",
                },
              },
            },
          },
          400: {
            description: "Invalid ID supplied",
            content: {},
          },
          404: {
            description: "Pet not found",
            content: {},
          },
        },
        security: [
          {
            api_key: [],
          },
        ],
      },
    },
    "/User/{id}": {
      get: {
        tags: ["User"],
        summary: "Encuentra una tarea",
        description: "Busca y devuelve una tarea con el id como parámetro",
        parameters: [
          {
            name: "id",
            description: "id de la tarea",
            in: "path",
            required: true,
            schema: {
              type: "integer",
              format: "int64",
            },
          },
        ],
        responses: {
          200: {
            description: "successful operation",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Tarea",
                },
              },
            },
          },
          500: {
            description: "Problem returning tasks",
            content: {},
          },
        },
        security: [
          {
            api_key: [],
          },
        ],
      },
    },
  },
  components: {
    schemas: {
      Users: {
        type: "array",
        items: {
          $ref: "#/components/schemas/User",
        },
      },
      User: {
        type: "object",
        properties: {
          name: {
            type: "string",
          },
          lastname: {
            type: "string",
          },
          email: {
            type: "string",
            unique: "true",
          },
          password: {
            type: "string",
          },
          role: {
            type: "string",
          },
          phone_number: {
            type: "string",
          },
        },
      },
    },
  },
};

export default swDocument;
