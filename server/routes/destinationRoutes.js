const express = require("express");
const router = express.Router();

const {
  createDestination,
  getAllDestinations,
  getDestinationById,
  updateDestination,
  deleteDestination,
} = require("../controllers/destinationController");
const { protect, adminOnly } = require("../middleware/authMiddleware");

// Public route
router.get("/", getAllDestinations);
router.get("/:id", getDestinationById);

// Admin routes
router.post("/", createDestination);
router.put("/:id", updateDestination);
router.delete("/:id", deleteDestination);

module.exports = router;