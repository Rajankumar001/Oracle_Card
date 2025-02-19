const User = require('../models/UserModels'); 
const savecard = require('../models/SavedCard'); 
const jwt = require('jsonwebtoken');
const asyncHandler = require("express-async-handler");
const UserSignin = asyncHandler(async (req, res) => {
    const { mobile } = req.body;
    if (!mobile) {
        return res.status(400).json({ message: 'Mobile number is required.' });
    }
    try {
        const user = await User.findOne({ mobile });
        if (!user) {
            return res.status(404).json({ message: 'User not found. Please sign up first.' });
        }

       
        const token = jwt.sign(
            { userId: user._id, mobile: user.mobile }, 
            process.env.JWT_SECRET, 
            { expiresIn: "7d" } 
        );

        res.status(200).json({ message: 'User authenticated successfully!', user, token });
    } catch (error) {
        console.error('Error during sign-in:', error);
        res.status(500).json({ message: 'Server error. Please try again later.' });
    }
});


const createUser = asyncHandler(async (req, res) => {
    const mobile = req.body.mobile;
    const findUser = await User.findOne({ mobile: mobile });
    if (!findUser) {
      const newUser = await User.create(req.body);
      res.json(newUser);
    } else {
      res.status(400).json({ error: "User with this Mobile already exists" });
    }
  });



  const logoutUser = asyncHandler(async (req, res) => {
    try {
       
        if (req.session) {
            req.session.destroy((err) => {
                if (err) {
                    return res.status(500).json({ message: 'Logout failed. Please try again.' });
                }
                res.status(200).json({ message: 'User logged out successfully!' });
            });
        } else {
            res.status(200).json({ message: 'User logged out successfully!' });
        }
    } catch (error) {
        console.error('Error during logout:', error);
        res.status(500).json({ message: 'Server error. Please try again later.' });
    }
});
const updateuser = asyncHandler(async (req, res) => {
    const { id } = req.params;
    try {
        const userupdate = await User.findByIdAndUpdate(id, { 
            ...req.body 
        }, { new: true }); 

        if (!userupdate) {
            return res.status(404).json({ error: "User not found" });
        }

        res.status(200).json(userupdate);
    } catch (error) {
        res.status(500).json({ error: error.message }); 
    }
});
const getuser = asyncHandler(async (req, res) => {
    const { id } = req.params;
    try {
        // Fetch user data
        const userget = await User.findOne({ _id: id });

        if (!userget) {
            return res.status(404).json({ message: "User not found" });
        }

        // Fetch saved card details
        const savedCards = await savecard.find({ _id: { $in: userget.savedcard } });

        res.status(200).json({ user: userget, savedCards });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = { UserSignin, createUser, logoutUser,updateuser,getuser};


