const dbConnect = require('./connectionDb');

const insert = async ()=>{
    const db = await dbConnect();
    // console.log(db);

    // insert one
    const res = await db.insertOne({
        name:"Faizan Khan",
        brand:"vivo",
        price:320,
        category:'mobile'
    })

    // insert many
    const insMulti = await db.insertMany(
        [
            {name:'faizan khan', address:"bulandshahr", state:"Uttar Pradesh"},
            {name:'irfan khan', address:'bulandshahr', state:'uttar Pradesh'}
        ]
    )
    // console.log(res.acknowledged)
    if(res.acknowledged){
        console.log("Data Inserted.")
    }
}
insert();