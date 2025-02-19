const express = require('express');
const { UserSignin ,createUser,logoutUser} = require('../controllers/UserController'); // Import controller
const router = express.Router();

// Define route for user sign-in
router.post('/signin', UserSignin);
router.post('/signup',createUser);
router.post('/logout',logoutUser);


module.exports = router;
