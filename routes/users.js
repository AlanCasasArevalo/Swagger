const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')

router
    .get('/', userController.getUser)
    .post('/', userController.postUser)
    .put('/:id', userController.putUser)
    .delete('/:id', userController.deleteUser)

module.exports = router;
