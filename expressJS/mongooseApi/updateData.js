const mongoose = require('mongoose');

mongoose.connect('mongodb://0.0.0.0:27017/e-com');

const productSchema = new mongoose.Schema({
    name:String,
    price:Number,
    brand:String
});

const updateData = async ()=>{
    const productModel = mongoose.model('products', productSchema);
    let data = await productModel.updateOne(
        {name:"faizan khan"},
        {
            $set:{
                name:'iphone',
                price:12000
            }
        }
    )
    console.log(data);
}

updateData();