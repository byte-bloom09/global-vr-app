const express = require("express");
const router = express.Router();

const {
  addToFavorites,
  getUserFavorites,
  removeFromFavorites,
} = require("../controllers/favoriteController");

const { protect } = require("../middleware/authMiddleware");

// Add to favorites
router.post("/:destinationId", protect, addToFavorites);

// Get logged-in user's favorites
router.get("/", protect, getUserFavorites);

// Remove from favorites
router.delete("/:destinationId", protect, removeFromFavorites);

module.exports = router;