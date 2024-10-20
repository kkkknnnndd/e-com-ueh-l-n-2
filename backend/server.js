import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import productRouter from "./routes/productRoute.js"
import userRouter from "./routes/userRoute.js"
import 'dotenv/config'



// app config
const app = express()
const prot = 4000


// middleware
app.use(express.json())
app.use(cors())

// db connection
connectDB();

// api endpoints
app.use("/api/product",productRouter)
app.use("/images", express.static('uploads'))
app.use("/api/user", userRouter)


app.get("/",(req,res)=>{
  res.send("API Working")
})

app.listen(prot,()=> {
  console.log(`Server Started on http://localhost:${prot}`)
})

