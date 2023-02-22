const dbConnect = require('./connectionDb');

const update = async ()=>{
    const db = await dbConnect();
    let update = db.updateOne(
        {price:320},{
            $set:{price:32000}
        }
    );
    let updateMany = db.updateMany(
        {name:"faizan khan"},{
            $set:{name:"faizan"}
        }
    )
    console.log("Update Called")
}

update();