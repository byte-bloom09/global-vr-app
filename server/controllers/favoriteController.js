const Favorite = require("../models/favoriteModel");
const Destination = require("../models/destinationModel");

// @desc    Add destination to favorites
// @route   POST /api/favorites/:destinationId
// @access  Private
const addToFavorites = async (req, res) => {
  try {
    const { destinationId } = req.params;

    const destination = await Destination.findById(destinationId);

    if (!destination) {
      return res.status(404).json({ message: "Destination not found" });
    }

    const existingFavorite = await Favorite.findOne({
      user: req.user._id,
      destination: destinationId,
    });

    if (existingFavorite) {
      return res.status(400).json({ message: "Already in favorites" });
    }

    const favorite = await Favorite.create({
      user: req.user._id,
      destination: destinationId,
    });

    res.status(201).json(favorite);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get logged-in user's favorites
// @route   GET /api/favorites
// @access  Private
const getUserFavorites = async (req, res) => {
  try {
    const favorites = await Favorite.find({ user: req.user._id })
      .populate("destination");

    res.json(favorites);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Remove from favorites
// @route   DELETE /api/favorites/:destinationId
// @access  Private
const removeFromFavorites = async (req, res) => {
  try {
    const { destinationId } = req.params;

    const favorite = await Favorite.findOneAndDelete({
      user: req.user._id,
      destination: destinationId,
    });

    if (!favorite) {
      return res.status(404).json({ message: "Favorite not found" });
    }

    res.json({ message: "Removed from favorites" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  addToFavorites,
  getUserFavorites,
  removeFromFavorites,
};