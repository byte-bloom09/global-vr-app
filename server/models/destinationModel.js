const mongoose = require("mongoose");

const destinationSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      enum: ["Beach", "Mountains", "Space", "Historical"],
      required: true,
    },

    price: {
      type: Number,
      required: true,
    },

    duration: {
      type: String, // e.g. "30 mins", "1 hour"
      required: true,
    },

    image: {
      type: String,
    },

    rating: {
      type: Number,
      default: 0,
    },

    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Destination", destinationSchema);