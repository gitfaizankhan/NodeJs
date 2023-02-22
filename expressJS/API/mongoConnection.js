const {MongoClient} = require('mongodb');

const url = 'mongodb://0.0.0.0:27017/';
const database = 'nodejs';

const client = new MongoClient(url);

async function connection(){
    let connect = await client.connect();
    const dataConect = connect.db(database);
    return dataConect.collection('node');
}

module.exports = connection;