const express = require('express');
const bodyParser = require('body-parser');
const { makeupperCase } = require('./middlewares');
const studentsRouter = require('./controllers/students');

const app = express();

app.use(bodyParser.json());// using the middleware body-parser to parse the body of the request
app. use(makeUpperCase); // global middle ware

app.use('/students', studentsRouter); // use studentsRouter

app.use('/', function(req, res, next) {
    console. log('Request Url:' + req.url);
    res. send('Hello');
});

const mongoose = require('mongoose');
const uri = "mongodb+srv://sunnypolamuri077:SuNnY.44@cluster1.qxzxmzq.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(uri,
{
    useNewUrlParser: true,
    useunifiedTopology: true
});

app. listen(3000, () => {
    console. log('Server is running on port 3000');
});