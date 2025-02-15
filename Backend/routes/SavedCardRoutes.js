const express = require("express");
const router = express.Router();
const SavedCard = require("../models/SavedCard");

// Middleware to extract loginId from request headers
const extractLoginId = (req, res, next) => {
  const loginId = req.headers["x-login-id"]; // Get from headers
  if (!loginId) {
    return res.status(401).json({ error: "User not found " });
  }
  req.loginId = loginId; // Attach to request object
  next();
};

// Route to save a new card
router.post("/save-card", extractLoginId, async (req, res) => {
  try {
    const { loginId } = req;
    const newCard = new SavedCard({ loginId });
    const savedCard = await newCard.save();
    res.json({ message: "Card saved successfully!", data: savedCard });
  } catch (error) {
    res.status(500).json({ error: "Failed to save card" });
  }
});

// Route to fetch saved cards for a user
router.get("/saved-cards", extractLoginId, async (req, res) => {
  try {
    const { loginId } = req;
    const savedCards = await SavedCard.find({ loginId }).sort({ createdAt: -1 });
    res.json(savedCards);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch saved cards" });
  }
});

module.exports = router;
