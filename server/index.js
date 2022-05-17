require('dotenv').config();
const express = require('express');
// const mysql = require('./db');
const sequelize = require('./db');
const models = require('./models/models')

const PORT = process.env.PORT || 3000;

const app = express();

const start = async () => {
    try {
        // await mysql.connect((err) => {
        await sequelize.authenticate();
        console.log('CONNECTION ESTABLISHED')
        await sequelize.sync();
        app.listen(PORT, () => console.log(`server started on port ${PORT}`));
    } catch (e) {
        console.log('CONNECTION ERROR')
        console.log(e);
    }
}

start();