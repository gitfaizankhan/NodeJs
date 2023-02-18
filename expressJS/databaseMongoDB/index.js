const { MongoClient } = require('mongodb');

const url = "mongodb://0.0.0.0:27017/";
const client = new MongoClient(url);
const dbName = 'nodejs';
async function main() {
    let result = await client.connect();
    console.log('Connected successfully to server');
    const db = result.db(dbName);
    const collection = db.collection('node');
    let response = await collection.find({}).toArray();
    console.log(response);
  }

main();