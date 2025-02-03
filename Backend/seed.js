const mongoose = require('mongoose');
const User = require('./models/UserModels'); // Ensure correct filename (case-sensitive)
require('dotenv').config();
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.error('MongoDB connection error:', err));

const seedUsers = async () => {
    try {
        const users = [
            { mobile: '+911234567890' },
            { mobile: '+919876543210' }
        ];

        // Insert or update users (avoids duplicates)
        for (let user of users) {
            await User.findOneAndUpdate(
                { mobile: user.mobile },  // Find by mobile
                user,                     // New data
                { upsert: true, new: true } // Insert if not found
            );
        }

        console.log('Sample users inserted/updated successfully!');
    } catch (error) {
        console.error('Error inserting/updating sample users:', error);
    } finally {
        mongoose.connection.close(); // Close connection after operation
    }
};

seedUsers();
