module.exports = {
    put: {
        tags: ['Users'],
        summary: 'Endpoint PUT',
        parameters: [
            {
                name: 'id',
                in: 'path',
                required: true,
                description: 'Parameter description in CommonMark or HTML.',
                schema: {
                    type: 'integer',
                    format: 'int64',
                    minimum: 1
                }
            }
        ],
        requestBody: {
            description: 'El cuerpo de la peticion es la siguiente',
            content: {
                'application/json': {
                    schema: {
                        $ref: '#/schemas/requestUser'
                    }
                }
            }
        },
        responses: {
            204: {
                description: 'Success'
            },
            400: {
                $ref: '#/components/badRequest'
            },
            401: {
                $ref: '#/components/unauthorized'
            },
            404: {
                $ref: '#/components/notFound'
            },
            500: {
                $ref: '#/components/serverError'
            },
            504: {
                $ref: '#/components/timeOut'
            }
        }
    },
    delete: {
        tags: ['Users'],
        summary: 'Endpoint DELETE',
        parameters: [
            {
                name: 'id',
                in: 'path',
                required: true,
                description: 'Parameter description in CommonMark or HTML.',
                schema: {
                    type: 'integer',
                    format: 'int64',
                    minimum: 1
                }
            },
            {
                type: "string",
                default: "252a90a3-4857-4895-8dc8-f87f46177fd4",
                name: "userId",
                required: true,
                in: "header"
            },
            {
                type: "string",
                default: "1593514340432-950B7A21-09B0-412B-9ECA-989B9637D2C5",
                name: "deviceId",
                required: true,
                in: "header"
            },
            {
                type: "string",
                default: "ES",
                name: "X-lang",
                required: false,
                in: "header"
            }
        ],
        responses: {
            204: {
                description: 'Success'
            },
            400: {
                $ref: '#/components/badRequest'
            },
            401: {
                $ref: '#/components/unauthorized'
            },
            404: {
                $ref: '#/components/notFound'
            },
            500: {
                $ref: '#/components/serverError'
            },
            504: {
                $ref: '#/components/timeOut'
            }
        }
    }
}