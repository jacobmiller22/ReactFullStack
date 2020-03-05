const mongoose = require("mongoose");
const { Schema } = mongoose; // The same as -> const Schema = mongoose.Schema;

const userSchema = new Schema({
  googleId: String
});

mongoose.model("users", userSchema);
