const mongoose = require('mongoose');

mongoose.connect('mongodb://0.0.0.0:27017/e-com');

const productSchema = new mongoose.Schema({
    name:String,
    price:Number
});

const findData = async ()=>{
    const productModel = mongoose.model('products', productSchema);
    const data = await productModel.find();
    console.log(data);
}

findData();