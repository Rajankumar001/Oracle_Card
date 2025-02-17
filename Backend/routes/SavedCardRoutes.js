const express = require("express");
const router = express.Router();
const SavedCard = require("../models/SavedCard");

// Route to save a new card
router.post("/save-card", async (req, res) => {
  try {
    const { loginId } = req.body; // Get loginId from request body
    if (!loginId) {
      return res.status(401).json({ error: "User not found" });
    }

    const newCard = new SavedCard({ loginId });
    const savedCard = await newCard.save();
    res.json({ message: "Card saved successfully!", data: savedCard });
  } catch (error) {
    res.status(500).json({ error: "Failed to save card" });
  }
});

// Route to fetch saved cards for a user
router.get("/saved-cards", async (req, res) => {
  try {
    const { loginId } = req.query; // Get loginId from query parameter
    if (!loginId) {
      return res.status(401).json({ error: "User not found" });
    }

    const savedCards = await SavedCard.find({ loginId }).sort({ createdAt: -1 });
    res.json(savedCards);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch saved cards" });
  }
});

module.exports = router;
