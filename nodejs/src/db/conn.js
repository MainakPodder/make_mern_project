
const mongoose = require('mongoose');

connectDB().catch(err => console.log(err));

async function connectDB() {
  await mongoose.connect('mongodb://127.0.0.1:27017/make_mern_project');
    console.log("database connected...!");
}
