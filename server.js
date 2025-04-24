require('dotenv').config();

const express = require('express');
const app = express(); // creates add var to confi server
const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL); //connects mongoose to database(MongoDB)
const db = mongoose.connection;
//Connection Checks
db.on('error', (error) => console.error(error)); //logs error on failing to conect to mongodb
db.once('open', () => console.log('Connected to Database'));

app.use(express.json());

const avatarRouter = require('./routes/avatar');
app.use('/avatar', avatarRouter);

app.listen(3000, () => console.log('Server started'));
