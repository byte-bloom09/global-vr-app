const express = require("express");
const router = express.Router();

const {
  createBooking,
  getUserBookings,
  cancelBooking,
} = require("../controllers/bookingController");

const { protect } = require("../middleware/authMiddleware");

// Book a destination
router.post("/:destinationId", protect, createBooking);

// Get logged-in user's bookings
router.get("/", protect, getUserBookings);

// Cancel booking
router.delete("/:id", protect, cancelBooking);

module.exports = router;