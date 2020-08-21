const express = require('express');
const app = express();
const swaggerConfig = require('./swagger-docs/config-swagger')

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

swaggerConfig(app)

app.listen(3000, () => {
    console.log('Escuchando en el puerto 3000')
})

module.exports = app;
