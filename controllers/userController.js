const axios = require('axios')
const getUsersUseCase = require('../use-cases/getUsersUseCase')
const postUsersUseCase = require('../use-cases/postUsersUseCase')
const putUsersUseCase = require('../use-cases/putUsersUseCase')
const deleteUsersUseCase = require('../use-cases/deleteUsersUseCase')

const getUser = async (req, res) => {
    console.log('Endpoint: GET users from jsonplaceholder');
    const response = await getUsersUseCase({axios})
    res.status(response.status).json(response.json)
}

const postUser = async (req, res) => {
    console.log('Endpoint: POST users from jsonplaceholder');
    const {body} = req
    const response = await postUsersUseCase({axios}, body)
    res.status(response.status).json(response.json)
}

const putUser = async (req, res) => {
    const { body } = req
    const { id } = req.params
    console.log('Endpoint: PUT users from jsonplaceholder');
    const response = await putUsersUseCase({axios}, body, id)
    res.sendStatus(response.status)
}

const deleteUser = async (req, res) => {
    console.log('Endpoint: DELETE users from jsonplaceholder');
    const { id } = req.params
    const response = await deleteUsersUseCase({axios}, id)
    res.sendStatus(response.status)
}

module.exports = {
    getUser,
    postUser,
    putUser,
    deleteUser
}