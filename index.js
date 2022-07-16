// create the express server here
require('dotenv').config();
const express = require('express');
const server = express();
const apiRouter = require('./api');
const morgan = require('morgan');
const bodyParser = require('body-parser')
const cors = require('cors')
const client = require('./db/client')
client.connect();

server.use(cors())
server.use(bodyParser.json());
server.use(morgan('dev'));
server.use(express.json())
server.use('/api', apiRouter);


server.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
  })



  server.use((req, res,next)=>{
    res.status(404).send('<h1> Page not found </h1>');
 });


 const {PORT = 3000} = process.env
server.listen(PORT, () => {
  console.log('The server is up on port', PORT)
});