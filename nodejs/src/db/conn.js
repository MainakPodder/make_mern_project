
const mongoose = require('mongoose');

connectDB().catch(err => console.log(err));

async function connectDB() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
    console.log("database connected...!");
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
