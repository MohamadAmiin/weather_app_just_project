const mongoose = require("mongoose");
const menuSchema = new mongoose.Schema({
  name: String,
  path: String,
  parentId: { type: mongoose.Schema.Types.ObjectId, ref: "Menu", default: null }
});
module.exports = mongoose.model("Menu", menuSchema);
