const mongoose = require("mongoose");

const SavedCardSchema = new mongoose.Schema({
  loginId: { type: String, required: true }, // Associate with logged-in user
  createdAt: { type: Date, default: Date.now }, // Auto-generate timestamp
});

const SavedCard = mongoose.model("SavedCard", SavedCardSchema);
module.exports = SavedCard;
