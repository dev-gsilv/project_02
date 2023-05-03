/*
Mentoria 2023
Api with Express
*/

const express = require('express');
const server = express();
const movies = require('./src/data/movies.json');

server.get('/', (req, res) => {
    return res.json({'main': 'index page'})
});
server.get('/users', (req, res) => {
    return res.json({'user': 'admin'})
});
server.get('/movies', (req, res) => {
    return res.json(movies)
});

server.listen(3000, () => {console.log("Server is running on port 3000")});


