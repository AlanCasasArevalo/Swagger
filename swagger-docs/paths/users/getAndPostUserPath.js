module.exports = {
    get: {
        security: [{
            bearerAuth: []
        }],
        tags: ['Users'],
        summary: 'Endpoint GET',
        responses: {
            200: {
                description: 'Success',
                content: {
                    'application/json': {
                        schema: {
                            $ref: '#/schemas/getUser'
                        }
                    }
                }
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
    post: {
        tags: ['Users'],
        summary: 'Endpoint POST',
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
            201: {
                description: 'Success',
                content: {
                    'application/json': {
                        schema: {
                            $ref: '#/schemas/responseUser'
                        }
                    }
                }
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