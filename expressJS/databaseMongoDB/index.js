const {MongoClient} = require('mongodb')
const url = 'mongodb://0.0.0.0:27017/';
const database = 'nodejs';
const client = new MongoClient(url);

async function getData(){
  let result = await client.connect();
  db = result.db(database);
  collection = db.collection('node')
  let data = await collection.find({}).toArray();
  console.log(data);
}


getData();