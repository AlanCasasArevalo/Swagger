const badRequestResponse = require('./badRequestResponse')
const notFoundResponse = require('./notFoundResponse')
const serverErrorResponse = require('./serverErrorResponse')
const timeOutResponse = require('./timeOutResponse')
const unauthorizedErrorResponse = require('./unauthorizedErrorResponse')
const customerIdParameter = require('./customerIdParameter')
const authenticationHeader = require('./bearerAuthenticationHeader')
const extraHeadersRequiredParams = require('./extraHeadersRequiredParams')

module.exports = {
    badRequestResponse,
    notFoundResponse,
    serverErrorResponse,
    timeOutResponse,
    unauthorizedErrorResponse,
    customerIdParameter,
    authenticationHeader,
    extraHeadersRequiredParams
}