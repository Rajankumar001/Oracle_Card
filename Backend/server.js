const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const mongoose = require('mongoose');
const UserRouter = require('./routes/UserRoutes');

const bodyParser = require('body-parser');
const cors = require('cors');

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 8080;

// CORS options to allow requests from your frontend
const corsOptions = {
  origin: 'http://localhost:3000', 
  methods: 'GET,POST,PUT,DELETE',
  allowedHeaders: 'Content-Type,Authorization', 
};

// Apply middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'build')));

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

// Serve static files
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Use custom route handlers for User and Leaderboard
app.use('/api/User', UserRouter);
// app.use('/api/leaderboard', Router);

// Test route to ensure the app is running
app.get("/home", (req, res) => {
  res.send("Welcome Rajan");
});

// Start the server
app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});
