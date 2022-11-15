const mongoose= require("mongoose");
const validator = require ("validator");
const User =  mongoose.model("User",{
    username :{
        type:String,
        required: true,
        trim: true,
    },
    email:{
        type: String,
        required:true,
        trim: true,
        lowercase: true,
        validate(value){
            if (!validator.isEmail(value)) {
                throw new Error("Email is invalid");
            }
        },
    },
    phonenumber:{
        type: Number,
        required:true,
        minlength:10,
        
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
        trim: true,
        validate(value){
            if (value.toLowerCase().includes("password")){
                throw new Error('Password cannot contain "password"');
            }
        },
    },
    
});
module.exports = User;