module.exports =()=>{ const mongoose = require("mongoose");
const colleCtion = require("../models/schema");

main()
  .then(() => console.log("database connected"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/PassUser");
}
}

const dataInit =async ()=>{
    let user1 = await colleCtion.insertMany([{
        name:"Rupesh kumar2",
        email:"r4rupesh9873@gmail.com",
        password1:"123",
        password2:"123",
        
     }]);

}

dataInit();