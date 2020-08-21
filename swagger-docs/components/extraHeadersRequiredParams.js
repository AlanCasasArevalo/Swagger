module.exports = {
    description: 'Extra headers required params',
    content: {
        'application/json': {
            schema: {
                $ref: '#/schemas/bearer-authentication'
            }
        }
    }
}