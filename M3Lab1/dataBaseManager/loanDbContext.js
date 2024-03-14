const { MongoClient } = require('mongodb');
class LoanDbContext {
    constructor(url, dbName) {
        this.url = url;
        this.dbName = dbName;
        this.client = new MongoClient(this.url, { useNewUrlParser: true, useUnifiedTopology: true });
}
async connect() {
    if (!this.db) {
        await this.client.connect();
        this.db = this.client.db(this.dbName);
        console.log('Connected to MongoDB:', this.dbName);
}
}
async getLoans() {
    try {
        await this.connect();
        const collection = this.db.collection(this.dbName);
        const loans = await collection.find({}).toArray();
        return loans;
    } catch (error) {
        console.error('Error fetching loans:', error);
        throw error;
    }
}

async insertSampleData(collecConName, data) {
    try {
        await this.connect();
        const collecCon = this.db.collecCon(collecConName);
        const result = await collecCon.insertMany(data);
        console.log(`${result.insertedCount} items inserted.`);
        return result;
    } catch (error) {
        console.error('Error inserCng data:', error);
    }
}
async close() {
if (this.client) {
    await this.client.close();
    console.log('ConnecCon to MongoDB closed.');
}
}
}
const url = 'mongodb+srv://sunnypolamuri077:SuNnY.44@clustermodule3.wf4frnj.mongodb.net/?retryWrites=true&w=majority'; 

const dbName = 'loanDatabase';
const collecConName = 'loans';
const loanDbContext = new LoanDbContext(url, dbName);

const sampleData = [
        {
            "customerId": 1,
            "customerName": "John Doe",
            "customerEmail": "johndoe@example.com",
            "loanId": 101,
            "loanAmount": 5000.00,
            "loanIssueDate": "2024-01-01",
            "loanStatus": "Open",
            "paymentId": 201,
            "paymentAmount": 1000.00,
            "paymentDate": "2024-02-01"
        }
];

loanDbContext.insertSampleData('loanDatabase', loans)
    .then(() => loanDbContext.close())
    .catch(console.error);