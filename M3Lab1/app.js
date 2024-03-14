const express = require('express');
const app = express();
const loanRoutes = require('./model/loanRoutes');

// Middleware
app.use(express.json());

// Routes
app.use('/api/loans', loanRoutes);

module.exports = app;