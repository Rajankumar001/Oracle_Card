const express = require('express');
const { UserSignin } = require('../controllers/UserController'); // Import controller
const router = express.Router();

// Define route for user sign-in
router.post('/signin', UserSignin);

module.exports = router;
