const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 4000;
const { students } = require('./routes/register');
const { signIn } = require('./routes/login')
const { MongoServer } = require('./config/keys')


const server = express();
server.use(cors());
server.use(bodyParser.json())
students(server);
signIn(server);
MongoServer(server);


server.listen(port, () => console.log(`Server started on ${port}`))