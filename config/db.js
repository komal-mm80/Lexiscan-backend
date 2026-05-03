const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://komalmurtaza491_db_user:KGX6MwjIHwrhUKKY@cluster0.tom0wny.mongodb.net/lexiscan?appName=Cluster0")
.then(() => console.log("✅ Connected to MongoDB"))
.catch((err) => {
  console.error("❌ MongoDB connection error:", err.message);
  process.exit(1);
});

//console.log("🌍 MongoDB URL:", process.env.MONGO_URL);

module.exports = mongoose;

