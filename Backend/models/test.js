const mongoose=require('mongoose');
const testSchema =new mongoose.Schema({
    ProductName:String,
    ProductPrice:Number,
});
module.exports=mongoose.model("test",testSchema);