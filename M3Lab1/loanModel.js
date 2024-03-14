// models/loanModel.js
const mongoose = require('mongoose');

const loanSchema = new mongoose.Schema({
  // Define your schema fields here
  amount: {
    type: Number,
    required: true,
  },
  // Add more fields as needed
});

const Loan = mongoose.model('Loan', loanSchema);

module.exports = Loan;
