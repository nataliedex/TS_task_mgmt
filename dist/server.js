import express from "express";
import dotenv from "dotenv";
import connectDB from "./database";
dotenv.config();
const app = express();
connectDB();
app.listen(process.env.PORT || 8000, () => {
    console.log(`Server is currently running on Port; ${process.env.PORT || 8000}`);
});
