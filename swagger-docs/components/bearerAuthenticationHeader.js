module.exports = {
    description: 'Bearer authentication',
    content: {
        'application/json': {
            schema: {
                $ref: '#/schemas/bearer-authentication'
            }
        }
    }
}