const mongoose = require('mongoose');

const main = async ()=>{
    await mongoose.connect("mongodb://0.0.0.0:27017/e-com");
    const productSchema = new mongoose.Schema({
        name:String
    });
    const productModel = mongoose.model("products", productSchema);
    let data = new productModel({name:"faizan khan"});
    let result = await data.save();
    console.log(result); 
}

main();