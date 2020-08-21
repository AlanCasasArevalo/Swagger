module.exports = {
    description: 'Gateway Timeout',
    content: {
        'application/json': {
            schema: {
                $ref: '#/schemas/error'
            }
        }
    }
}