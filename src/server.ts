import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
import connectDB from "./config/database.js";

import taskRoutes from "./route/taskRoutes.js";

dotenv.config();

const app = express();

connectDB();

// ES Module workaround for __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Using EJS for views
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../views"));

// Middleware
app.use(express.urlencoded({ extended: true }));

//Static Folder
app.use(express.static("public"));


app.use("/", taskRoutes);

app.listen(process.env.PORT || 8000, () => {
    console.log(`Server is currently running on Port; ${process.env.PORT || 8000}`);
});