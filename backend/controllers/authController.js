const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Secret code for admin registration (you can change this)
const ADMIN_SECRET_CODE = "admin123";

exports.register = async (req, res) => {
  try {
    const { name, email, password, role, adminCode } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Validate admin registration
    let userRole = "user";
    if (role === "admin") {
      if (adminCode !== ADMIN_SECRET_CODE) {
        return res.status(400).json({ message: "Invalid admin secret code" });
      }
      userRole = "admin";
    }

    const hashed = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, password: hashed, role: userRole });
    res.status(201).json({ message: "User registered successfully", user: { id: user._id, name: user.name, email: user.email, role: user.role } });
  } catch (error) {
    res.status(500).json({ message: "Error registering user", error: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // Create token (default to 'user' role if not set)
    const userRole = user.role || "user";
    const token = jwt.sign({ id: user._id, email: user.email, role: userRole }, process.env.JWT_SECRET, { expiresIn: "1d" });

    res.json({ message: "Login successful", token, user: { id: user._id, name: user.name, email: user.email, role: userRole } });
  } catch (error) {
    res.status(500).json({ message: "Error logging in", error: error.message });
  }
};
