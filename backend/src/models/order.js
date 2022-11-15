const mongoose= require("mongoose");
const validator = require ("validator");
const Order =  mongoose.model("Order",{
    address:{
        type:String,
        required: true,
        trim: true,
    },
    items:{
        type: String,
        required:true,
        trim: true,
        lowercase: true,
        
    },
    
    paymentoptions:{
        type: String,
        default: 0,
        validate(value){
            if(value<0){
                throw new Error("must be a positive number");
            }
        },
    },
});
module.exports = Order;