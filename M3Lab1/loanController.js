// loanHandlers.js
const { LoanDbContext } = require('./LoanDbContext'); 
const dbUrl = 'mongodb://localhost:27017';
const dbName = 'loanDatabase';
const collecLonName = 'loans';
const loanDbContext = new LoanDbContext(dbUrl, dbName);

exports.getAllLoans = async (req, res) => {
    try {
        // Connect to the database
        await loanDbContext.connect();
        // Fetch the loans using the getLoans method of LoanDbContext
        const loans = await loanDbContext.getLoans();
        res.json(loans);
    } catch (error) {
        console.error('Failed to fetch loans:', error);
        res.status(500).send('Internal Server Error');
    } finally {
        // Ensure the database connection is closed after the request
        await loanDbContext.close();
    }
};

exports.saveData = async (req, res) => {
    try {
        // Connect to the database
        await loanDbContext.connect();
        // Fetch the loans using the getLoans method of LoanDbContext
        const loans = await loanDbContext.getLoans(loans);
        res.json(loans);
    } catch (error) {
    console.error('Failed to fetch loans:', error);
    res.status(500).send('Internal Server Error');
    } finally {
        // Ensure the database connecLon is closed aXer the request
        await loanDbContext.close();
}
};
