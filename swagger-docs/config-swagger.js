const usersRouter = require('../routes/users');

const swaggerJsDoc = require('swagger-jsdoc')
const swaggerUI = require('swagger-ui-express')
const swaggerOptions = require('../swagger-docs/index')

const swaggerUIOptions = {
    explorer: false,
    customCss: '.swagger-docs-ui .topbar { display: none }'
}

const specs = swaggerJsDoc(swaggerOptions)

module.exports = (app) => {
    app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(specs, swaggerUIOptions ))
    app.use('/users', usersRouter);
}