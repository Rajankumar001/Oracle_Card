const User = require('../models/UserModels'); // Import User model

// User Sign-in function (mobile only)
const UserSignin = async (req, res) => {
    const { mobile } = req.body;

    // Validate input
    if (!mobile) {
        return res.status(400).json({ message: 'Mobile number is required.' });
    }

    try {
        // Find user by mobile number
        const user = await User.findOne({ mobile });

        // If user does not exist
        if (!user) {
            return res.status(404).json({ message: 'User not found. Please sign up first.' });
        }

        // Generate a success response (You can also send an OTP here)
        res.status(200).json({ message: 'User authenticated successfully!', user });
    } catch (error) {
        console.error('Error during sign-in:', error);
        res.status(500).json({ message: 'Server error. Please try again later.' });
    }
};

module.exports = { UserSignin };
