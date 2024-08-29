const mongoose = require('mongoose');
const dotenv = require("dotenv");
dotenv.config();

const uri =  'mongodb+srv://nitingoley42:order@cluster0.myi6c.mongodb.net/Order-micro?retryWrites=true&w=majority&appName=Cluster0'

const ConnectDB = ()=>{
    mongoose.connect(uri)
    .then(()=>{
        console.log("Database is connected");
    }).catch((er)=>{
        console.log("Database is not connected", er);
    })
}



module.exports = ConnectDB;