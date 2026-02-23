const express = require("express");
const {
  registerUser,
  loginUser,
  getAllUsers,
  blockUser,
  deleteUser
} = require("../controllers/authController");

const { protect, adminOnly } = require("../middleware/authMiddleware");

const router = express.Router();

// ================= AUTH ROUTES =================
router.post("/register", registerUser);
router.post("/login", loginUser);

// ================= PROTECTED ROUTE =================
router.get("/profile", protect, (req, res) => {
  res.status(200).json({
    message: "Profile accessed successfully",
    user: req.user,
  });
});

// ================= ADMIN ONLY ROUTES =================
router.get("/admin-dashboard", protect, adminOnly, (req, res) => {
  res.status(200).json({
    message: "Welcome Admin 👑",
    admin: req.user,
  });
});

// ✅ Admin can view all users
router.get("/users", protect, adminOnly, getAllUsers);

// 🔴 Admin can block a user
router.patch("/block-user/:id", protect, adminOnly, blockUser);

// 🗑 Admin can delete a user
router.delete("/delete-user/:id", protect, adminOnly, deleteUser);

module.exports = router;