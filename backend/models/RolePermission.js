const mongoose = require("mongoose");
const rolePermissionSchema = new mongoose.Schema({
  roleId: { type: mongoose.Schema.Types.ObjectId, ref: "Role" },
  permissionId: { type: mongoose.Schema.Types.ObjectId, ref: "Permission" }
});
module.exports = mongoose.model("RolePermission", rolePermissionSchema);
