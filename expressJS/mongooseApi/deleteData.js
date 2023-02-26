const mongoose = require('mongoose');


mongoose.connect('mongodb://0.0.0.0:27017/e-com');

const productSchema  = new mongoose.Schema({
    name:String,
    price:Number
});

const deleteData = async ()=>{
    const productModel = mongoose.model('products', productSchema);
    let dData = await productModel.deleteOne({name:"iphone"});
    console.log(dData);
}

deleteData();