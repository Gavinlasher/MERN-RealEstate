import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './Routes/user.route.js';
import authRouter from './Routes/auth.route.js';
dotenv.config();
mongoose.connect(process.env.MONGO).then(() => {
    console.log("db is connected")
}).catch((err)=>{
    console.log(err)
});

const app = express();
app.use(express.json());
app.listen(3000,() =>{
    console.log("Server is Running on Port 3000");
});

app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);