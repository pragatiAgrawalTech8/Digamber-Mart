
// import mongoose from "mongoose";

// async function connectDB() {
//     try {
//         if (!process.env.MONGO_URI) {
//             console.error("MongoDB Connection Error: MONGO_URI is missing in process.env / .env file.");
//             return;
//         }
//         console.log("Connecting to MongoDB URI:", process.env.MONGO_URI);
//         await mongoose.connect(process.env.MONGO_URI, {
//             dbName: "DigamberMart"
//         });
//         console.log("MongoDB connected successfully");
//     } catch (error) {
//         console.error("MongoDB connection failed:", error.message);
//     }
// }

// export default connectDB;








import mongoose from "mongoose"
// connection for mongodb database.
 async function connectDB (){
    try {
        console.log(process.env.MONGO_URI);
        await mongoose.connect(`mongodb://0.0.0.0:27017/DigamberMart`)
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.log("MongoDB connection failed",error);
    }
}

export default connectDB