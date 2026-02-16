
const mongoose = require("mongoose")
const DB_URL = "mongodb+srv://user:user%4009876@cluster0.oxyioym.mongodb.net/mydb"
const connectToDatabase = async() => {
    try {
        mongoose.connect(DB_URL);
        console.log("Database is connected")

    }catch (error) {
        console.log(`Database connection error is ${error}
            `)
    }
}
module.exports = connectToDatabase;