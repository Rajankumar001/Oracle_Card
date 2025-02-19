const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const UserRouter = require('./routes/UserRoutes');
const SavedCardRouter = require('./routes/SavedCardRoutes'); // Import saved cards routes

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 8080;

// CORS options to allow requests from your frontend
const corsOptions = {
  origin: 'http://localhost:3000',
  methods: 'GET,POST,PUT,DELETE',
  allowedHeaders: 'Content-Type,Authorization,x-login-id', 
};

// Apply middleware
app.use(cors(corsOptions)); // Enable CORS
app.use(express.json()); // Parse incoming JSON requests
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded bodies
app.use(express.static(path.join(__dirname, 'build'))); // Serve static files

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));

// Serve static files
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.use('/api/User', UserRouter);
app.use('/api/savedcard', SavedCardRouter); // Add saved cards routes

// Test route
app.get("/home", (req, res) => {
  res.send("Welcome Oracle cards");
});

// Start the server
app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});
