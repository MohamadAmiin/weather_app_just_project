const mongoose = require("mongoose");
const permissionSchema = new mongoose.Schema({
  name: String,
  menuId: { type: mongoose.Schema.Types.ObjectId, ref: "Menu" }
});
module.exports = mongoose.model("Permission", permissionSchema);
