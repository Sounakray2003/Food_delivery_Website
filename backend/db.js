const mongoose = require('mongoose');

const mongoURI = 'mongodb://ahlawatsanjana187:sanjanaa@ac-fy2cfwb-shard-00-00.iuj1n4h.mongodb.net:27017,ac-fy2cfwb-shard-00-01.iuj1n4h.mongodb.net:27017,ac-fy2cfwb-shard-00-02.iuj1n4h.mongodb.net:27017/Foodie?ssl=true&replicaSet=atlas-s26m58-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0';

const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
      serverSelectionTimeoutMS: 10000, // 10 seconds timeout
    });
    console.log("Connected to MongoDB");

    const db = mongoose.connection.db;
    const fetched_data = db.collection("food_items");

    // Fetch food_items data
    const data = await fetched_data.find({}).toArray();

    // Fetch foodCategory data
    const foodCategory = await db.collection("food_category").find({}).toArray();

    // Set global variables
    global.food_items = data;
    global.food_category = foodCategory;
    // console.log(global.food_items)

  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

module.exports = mongoDB;
