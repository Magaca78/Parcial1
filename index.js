const express = require('express');
const { default: mongoose } = require('mongoose');
const app = express();
const port = process.env.PORT || 3000;
require('dotenv').config();
const routerApi = require('./routes')

app.listen(port,() => console.log("Active port", port));

app.use(express.json())

mongoose
.connect(process.env.MONGODB_CONNECTION_STRING)
.then (() => console.log('Sucess connection with mongo'))
.catch((error) => console.log(error));

routerApi(app);