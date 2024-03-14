const express = require('express');
const bodyParser = require('body-parser');
const { insertLoanData, findLoanData, updateLoanData, deleteLoanData } = require('./MongoDBCrud');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Route to insert (POST) loan data
app.post('/loan', async (req, res) => {
  try {
    const loanData = req.body;
    await insertLoanData(loanData);
    res.status(201).json({ message: 'Loan data inserted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Route to find (GET) loan data by customerId
app.get('/loan/:customerId', async (req, res) => {
  try {
    const customerId = parseInt(req.params.customerId);
    const loanData = await findLoanData({ customerId });
    if (loanData) {
      res.status(200).json(loanData);
    } else {
      res.status(404).json({ error: 'Loan data not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Route to update (PUT) loan data by customerId
app.put('/loan/:customerId', async (req, res) => {
  try {
    const customerId = parseInt(req.params.customerId);
    const update = req.body;
    await updateLoanData({ customerId }, update);
    res.status(200).json({ message: 'Loan data updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Route to delete (DELETE) loan data by customerId
app.delete('/loan/:customerId', async (req, res) => {
  try {
    const customerId = parseInt(req.params.customerId);
    await deleteLoanData({ customerId });
    res.status(200).json({ message: 'Loan data deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
