const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const model = mongoose.model;


const userSchema = Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type: mongoose.Schema.Types.Mixed,
        required:true,
    },
    password1:{
            type: mongoose.Schema.Types.Mixed ,
            minlength: 6, 
            maxlength: 15, 
            required: true, 
        
    },
    password2:{
        type: mongoose.Schema.Types.Mixed ,
            minlength: 6, 
            maxlength: 15, 
            required: true, 
},
});


const UserData = model("UserData",userSchema);

module.exports = UserData;





