const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
    id:{
        type:String,
        required:true
    },
    productid:{
     type:String
    },
    data:{
        type:Array
    },
    quantity:{
        type:Number
    }
})


const cartModel = mongoose.model("cartModel",cartSchema);
module.exports = cartModel