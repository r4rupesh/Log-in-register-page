const mongoose = require("mongoose");
const colleCtion = require("../models/schema");

main()
  .then(() => console.log("database connected"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/PassUser");
}

const reset = async () => {
  await colleCtion.deleteMany({});
};
reset();
