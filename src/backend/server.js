import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import connectDB from "./config/db.js";
import contactRoutes from "./routes/contactRoutes.js";
import newsletterRoutes from "./routes/newsletterRoutes.js";

// Load environment variables
dotenv.config();

// Initialize Express App
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors({ origin: "http://localhost:5173" })); // Allow frontend access

// Connect to MongoDB
connectDB();

// Use Routes
app.use("/api/contact", contactRoutes);
app.use("/api/newsletter", newsletterRoutes);

// Start Server
app.listen(PORT, () => console.log(` Server running on port ${PORT}`));
