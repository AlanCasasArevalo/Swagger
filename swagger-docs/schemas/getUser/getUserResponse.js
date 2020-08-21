module.exports = {
    type: 'object',
    properties: {
        id: {
            type: 'integer'
        },
        name: {
            type: 'string'
        },
        username: {
            type: 'string'
        },
        email: {
            type: 'string'
        },
        age: {
            type: 'string'
        },
        address: {
            type: 'object',
            properties: {
                street: {
                    type: 'string'
                },
                suite: {
                    type: 'string'
                },
                city: {
                    type: 'string'
                },
                zipcode: {
                    type: 'string'
                },
                geo: {
                    type: 'object',
                    properties: {
                        lat: {
                            type: 'string'
                        },
                        lng: {
                            type: 'string'
                        }
                    }
                }
            }
        },
        phone: {
            type: 'string'
        },
        website: {
            type: 'string'
        },
        company: {
            type: 'object',
            properties: {
                name: {
                    type: 'string'
                },
                catchPhrase: {
                    type: 'string'
                },
                bs: {
                    type: 'string'
                }
            }
        }
    }
}
