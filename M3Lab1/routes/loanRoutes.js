// Student Name : Sunny Polamuri
//Student ID : 1228318444

const express = require('express');
const router = express.Router();

// Middleware
router.use((req, res, next) => {
  // Middleware logic
  next(); // Call next to proceed to the next middleware or route handler
});

// Route handlers
router.get('/', (req, res) => {
  res.send('Get all Loans');
});

// Export the router
module.exports = router;
