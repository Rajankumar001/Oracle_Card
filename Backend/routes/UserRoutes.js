const express = require('express');
const { UserSignin ,createUser,logoutUser,updateuser,getuser} = require('../controllers/UserController'); // Import controller
const router = express.Router();

// Define route for user sign-in
router.post('/signin', UserSignin);
router.post('/signup',createUser);
router.post('/logout',logoutUser);
router.put('/updateuser/:id',updateuser);
router.get('/getbyid/:id',getuser)

module.exports = router;
