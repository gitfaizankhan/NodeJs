// const {MongoClient} = require('mongodb')
// const url = 'mongodb://0.0.0.0:27017/';
// const database = 'nodejs';
// const client = new MongoClient(url);

// async function dbConnect(){
//   let result = await client.connect();
//   db = result.db(database);
//   return db.collection('node')
//   // let data = await collection.find({}).toArray();
//   // console.log(data);
// }


// dbConnect().then((response)=>{
//   response.find().toArray().then((data)=>{
//     console.log(data)
//   })
// })


const dbConnect = require('./mongodb');

const main = async ()=>{
  console.log("Main Function Called")
  let data = await dbConnect()
  data = await data.find().toArray();
  console.log(data);
}

main();