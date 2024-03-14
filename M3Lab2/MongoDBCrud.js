// MongoDBCrud.js

const { MongoClient } = require('mongodb');

const url = 'mongodb+srv://sunnypolamuri077:SuNnY.44@clusterm3lab2.t1mpdfc.mongodb.net/?retryWrites=true&w=majority'; // MongoDB server URL
const dbName = 'loanDatabase';
const collectionName = 'loan_data';

const client = new MongoClient(url);

async function insertLoanData(loanData) {
  try {
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection(collectionName);
    const result = await collection.insertOne(loanData);
    console.log(`New document inserted with _id: ${result.insertedId}`);
  } finally {
    await client.close();
  }
}


async function findLoanData(query) {
  try {
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection(collectionName);
    const loanData = await collection.findOne(query);
    return loanData;
  } finally {
    await client.close();
  }
}

async function updateLoanData(query, update) {
  try {
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection(collectionName);
    const result = await collection.updateOne(query, { $set: update });
    console.log(`${result.matchedCount} document(s) matched the query, ${result.modifiedCount} document(s) was/were updated.`);
  } finally {
    await client.close();
  }
}

async function deleteLoanData(query) {
  try {
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection(collectionName);
    const result = await collection.deleteOne(query);
    console.log(`${result.deletedCount} document(s) was/were deleted.`);
  } finally {
    await client.close();
  }
}

module.exports = {
    insertLoanData,
    findLoanData,
    updateLoanData,
    deleteLoanData
  };
