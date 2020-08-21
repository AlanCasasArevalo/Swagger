const { getAndPostUserPath, putAndDeleteUserPath } = require('./paths/users/index')
const { badRequestResponse, unauthorizedErrorResponse, notFoundResponse, serverErrorResponse, timeOutResponse, customerIdParameter } = require('./components/index')
const { request, error, getUserResponse, postResponse, customerIdSchema, bearerAuthentication } = require('./schemas')
const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'JsonPlaceHolder',
            description: 'JsonPlaceHolder API CRUD',
            contact: {
                name: 'JsonPlaceHolder'
            },
        },
        license: {
            name: '',
            url: ''
        },
        servers: [{
            url: '/'
        }],
        tags: [{
            name: 'Users'
        }],
        paths: {
            '/users': getAndPostUserPath,
            '/users/{id}': putAndDeleteUserPath,
        },
        schemas: {
            requestUser: request,
            responseUser: postResponse,
            getUser: getUserResponse,
            customerId: customerIdSchema,
            error
        },
        components: {
            badRequest: badRequestResponse,
            unauthorized: unauthorizedErrorResponse,
            notFound: notFoundResponse,
            serverError: serverErrorResponse,
            timeOut: timeOutResponse,
            customerId: customerIdParameter,
            securitySchemes: {
                bearerAuth: bearerAuthentication
            }
        }
    },
    apis: ['./routes/getAndPostUserPath.js']
}

module.exports = swaggerOptions