const dbConnect = require('./connectionDb');

const deleteData = async ()=>{
    const del = await dbConnect();
    let data = await del.deleteOne(
        {name:"faizan"}
    )
    console.log(data);

    let delMulti = await del.deleteMany({name:"irfan khan"});
    console.log(delMulti);
}

deleteData();