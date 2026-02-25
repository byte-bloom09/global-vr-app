const Destination = require("../models/destinationModel");

// @desc    Create new destination (Admin only)
// @route   POST /api/destinations
// @access  Private/Admin
const createDestination = async (req, res) => {
  try {
    const { name, description, category, price, duration, image } = req.body;

    const destination = await Destination.create({
      name,
      description,
      category,
      price,
      duration,
      image,
      createdBy: null,
    });

    res.status(201).json(destination);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get all destinations
// @route   GET /api/destinations
// @access  Public
const getAllDestinations = async (req, res) => {
  try {
    const destinations = await Destination.find();
    res.json(destinations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Update destination (Admin only)
// @route   PUT /api/destinations/:id
// @access  Private/Admin
const updateDestination = async (req, res) => {
  try {
    const destination = await Destination.findById(req.params.id);

    if (!destination) {
      return res.status(404).json({ message: "Destination not found" });
    }

    const { name, description, category, price, duration, image } = req.body;

    destination.name = name || destination.name;
    destination.description = description || destination.description;
    destination.category = category || destination.category;
    destination.price = price || destination.price;
    destination.duration = duration || destination.duration;
    destination.image = image || destination.image;

    const updatedDestination = await destination.save();

    res.json(updatedDestination);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Delete destination (Admin only)
// @route   DELETE /api/destinations/:id
// @access  Private/Admin
const deleteDestination = async (req, res) => {
  try {
    const destination = await Destination.findById(req.params.id);

    if (!destination) {
      return res.status(404).json({ message: "Destination not found" });
    }

    await destination.deleteOne();

    res.json({ message: "Destination removed successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// @desc    Get single destination by ID
// @route   GET /api/destinations/:id
// @access  Public
const getDestinationById = async (req, res) => {
  try {
    const destination = await Destination.findById(req.params.id);

    if (!destination) {
      return res.status(404).json({ message: "Destination not found" });
    }

    res.json(destination);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ✅ EXPORT MUST BE AT THE VERY BOTTOM
module.exports = {
  createDestination,
  getAllDestinations,
  getDestinationById,
  updateDestination,
  deleteDestination,
};