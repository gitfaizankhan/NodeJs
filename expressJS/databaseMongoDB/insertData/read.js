const dbConnect = require('./connectionDb');

const main = async ()=>{
    let data = await dbConnect();
    data = await data.find().toArray();
    console.log(data);
}

main();