const mongoose = require("mongoose");

// Connect mongoose with MongoDB
mongoose.connect(`mongodb+srv://${process.env.DB_USER_PASS}@cluster0.torwnp2.mongodb.net/Argonautes`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,

});

mongoose.connection.once("open", () => {
  console.log("MongoDB is connected");
});