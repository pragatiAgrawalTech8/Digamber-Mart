import mongoose from "mongoose"

 async function connectDB (){
    try {
        await mongoose.connect(`${process.env.Mongo_URI}/DigamberMart`)
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.log("MongoDB connection failed",error);
    }
}

export default connectDB