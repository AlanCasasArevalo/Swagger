module.exports = {
    description: 'Resource was not found',
    content: {
        'application/json': {
            schema: {
                $ref: '#/schemas/error'
            }
        }
    }
}