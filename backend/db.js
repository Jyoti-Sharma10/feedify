const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://feedify:feedify123@cluster0.pquszpk.mongodb.net/feedify?retryWrites=true&w=majority';

const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI, { useNewUrlParser: true });
    console.log('Connected to MongoDB');
    const fetched_data = mongoose.connection.db.collection('food_items');
    const data = await fetched_data.find({}).toArray(); 
    global.food_items = data;
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};

module.exports = mongoDB;
