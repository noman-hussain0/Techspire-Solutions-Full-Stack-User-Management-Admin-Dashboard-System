const mongoose = require("mongoose");
//const URI = "mongodb+srv://admin:admin@cluster0.8bjllmt.mongodb.net/mern_admin_panel?retryWrites=true&w=majority&appName=Cluster0";
const URI = process.env.MANGODB_URI;

const connectDb = async () => {
    try {
        await mongoose.connect(URI);
        console.log("connection successful to DB");
    } catch (error) {
        console.error("Database connection failed:", error.message);
        console.error(error);  // Add this to get more details
        process.exit(0);
    }
};

module.exports = connectDb;