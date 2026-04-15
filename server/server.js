const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const authRoutes = require("./routes/authRoutes");
const destinationRoutes = require("./routes/destinationRoutes"); // ✅ ADD THIS
const favoriteRoutes = require("./routes/favoriteRoutes");
const bookingRoutes = require("./routes/bookingRoutes");

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/destinations", destinationRoutes); // ✅ ADD THIS
app.use("/api/favorites", favoriteRoutes);
app.use("/api/bookings", bookingRoutes);

app.get("/", (req, res) => {
  res.send("Global VR Backend Running 🚀");
});

// ✅ CONNECT MONGODB
// Validate required environment variables early
if (!process.env.MONGO_URI) {
  console.error("Missing required env: MONGO_URI. Set this in Render (Environment Variables).");
  process.exit(1);
}
if (!process.env.JWT_SECRET) {
  console.error("Missing required env: JWT_SECRET. Set this in Render (Environment Variables).");
  process.exit(1);
}

// Connect to MongoDB with retry logic to avoid exiting immediately on transient failures
const connectWithRetry = async (retries = 5, delayMs = 5000) => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);

    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("MongoDB connection failed ❌", error.message || error);
    if (retries > 0) {
      console.log(`Retrying MongoDB connection in ${delayMs / 1000}s (${retries} attempts left)...`);
      setTimeout(() => connectWithRetry(retries - 1, delayMs), delayMs);
    } else {
      console.error("Exhausted MongoDB connection retries — exiting.");
      process.exit(1);
    }
  }
};

connectWithRetry();