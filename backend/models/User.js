const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  roleId: { type: mongoose.Schema.Types.ObjectId, ref: "Role" }
});
module.exports = mongoose.model("User", userSchema);
