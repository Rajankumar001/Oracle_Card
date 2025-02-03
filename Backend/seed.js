const mongoose = require('mongoose');
const User = require('./models/UserModels'); // Import User model
require('dotenv').config();
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.error('MongoDB connection error:', err));

const seedUsers = async () => {
    try {
        await User.insertMany([
            { mobile: '1234567890' },
            { mobile: '9876543210' }
        ]);

        console.log('Sample users inserted successfully!');
        mongoose.connection.close();
    } catch (error) {
        console.error('Error inserting sample users:', error);
        mongoose.connection.close();
    }
};

seedUsers();
