const express = require('express');
const server = express();
const router = require('./routes/index');
const morgan = require('morgan');

// Middleware que presenta la info en consola en formato 'dev'
server.use(morgan('dev'));

server.use(express.json());

// Middleware
server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
       'Access-Control-Allow-Headers',
       'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.header(
       'Access-Control-Allow-Methods',
       'GET, POST, OPTIONS, PUT, DELETE'
    );
    next();
 });

 //Middleware que agrega la url a cada una de las rutas
server.use('/rickandmorty', router);


module.exports = {
    server
}