const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    resume: String
});

const User = mongoose.model("Jobs", userSchema);


module.exports = User;