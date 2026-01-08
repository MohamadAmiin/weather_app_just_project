const express = require("express");
const router = express.Router();
const { verifyToken, isAdmin } = require("../middleware/auth");
const {
  getAllUsers,
  getUser,
  updateUser,
  deleteUser,
  createUser
} = require("../controllers/adminController");

// All routes require authentication and admin role
router.use(verifyToken);
router.use(isAdmin);

router.get("/users", getAllUsers);
router.get("/users/:id", getUser);
router.post("/users", createUser);
router.put("/users/:id", updateUser);
router.delete("/users/:id", deleteUser);

module.exports = router;
