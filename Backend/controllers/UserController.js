const User = require('../models/UserModels'); 
const UserSignin = async (req, res) => {
    const { mobile } = req.body;
    if (!mobile) {
        return res.status(400).json({ message: 'Mobile number is required.' });
    }
    try {
        const user = await User.findOne({ mobile });
        if (!user) {
            return res.status(404).json({ message: 'User not found. Please sign up first.' });
        }
        res.status(200).json({ message: 'User authenticated successfully!', user });
    } catch (error) {
        console.error('Error during sign-in:', error);
        res.status(500).json({ message: 'Server error. Please try again later.' });
    }
};

module.exports = { UserSignin };
