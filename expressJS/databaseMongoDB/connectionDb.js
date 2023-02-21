const {MongoClient} = require('mongodb');
const url = 'mongodb://0.0.0.0:27017/';
const database = 'nodejs';
const client = new MongoClient(url);

async function insertData(){
    let result = await client.connect();
    db = result.db(database);
    return db.collection('node');
}

module.exports = insertData;