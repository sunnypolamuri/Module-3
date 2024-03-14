// Student Name : Sunny Polamuri
//Student ID : 1228318444

const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

const mongoURI = 'mongodb+srv://sunnypolamuri077:SuNnY.44@clustermodule3.wf4frnj.mongodb.net/?retryWrites=true&w=majority'; 
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('Connected to MongoDB Atlas');
});

// Other configurations and middleware setup

// Routes setup
app.use('/api/loans', require('./routes/loanRoutes'));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

