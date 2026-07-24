console.log("Pragati");
import express from "express"
import connectDB from "./database/db.js"
import "dotenv/config"
import cors from "cors"
import userRoute from "./routes/userRoute.js"

const app = express()
const PORT = process.env.PORT || 5555

//middleware
app.use(express.json())
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))

app.use("/api/v1/user",userRoute)

app.listen(PORT, () => {
    connectDB()
    console.log(`Server is listening at port ${PORT}`)
})