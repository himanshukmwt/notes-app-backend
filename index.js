import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import noteRoutes from "./routes/noteRoutes.js";
import errorHandler from "./middlewares/errorHandler.js";
import logs from "./middlewares/logs.js";



dotenv.config();

const app = express();

app.use(express.json());
app.use(cors(
    {origin: "http://localhost:5173"}
));
app.use(logs);


app.use("/api/notes", noteRoutes);

app.use(errorHandler);

mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
        console.log("MongoDB connected");

        app.listen(process.env.PORT || 8009, () => {
            console.log(
                `Server running on port ${process.env.PORT || 8009}`
            );
        });
    })
    .catch((err) => {
        console.error("MongoDB connection failed:", err);
    });