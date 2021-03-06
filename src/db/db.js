const Mongoose = require("mongoose")

Mongoose.connect(
    "mongodb://127.0.0.1:27017/restaurant-olympus", {
        useNewUrlParser: true,
    }
);

const db = Mongoose.connection;
db.on("error", console.error.bind(console, "Connection error."));
db.once("open", function callback() {
    console.log("Connection with database succeeded.");
});

exports.db = db;