const error = require('./error-schema')
const request = require('./postUser/request-user-schema')
const postResponse = require('./postUser/response-user-schema')
const getUserResponse = require('./getUser/getUserResponse')
const customerIdSchema = require('./commons/customer-id-schema')
const bearerAuthentication = require('./commons/bearer-authentication-schema')
const extraHeadersRequiredParams = require('./commons/extra-headers-required-params-schema')

module.exports = {
    error,
    request,
    postResponse,
    getUserResponse,
    customerIdSchema,
    bearerAuthentication,
    extraHeadersRequiredParams
}