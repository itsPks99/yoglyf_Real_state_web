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

// ✅ Fix CORS: Allow both Local and Vercel Frontend URLs
const allowedOrigins = [
  "http://localhost:5173", // Local development
  "https://yoglyf-real-state-web.vercel.app/", // Vercel frontend
];

app.use(
  cors({
    origin: allowedOrigins, // Allow requests from these origins
    credentials: true, // Allow cookies & authentication headers if needed
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// Middleware
app.use(express.json());

// Connect to MongoDB
connectDB();

// Use Routes
app.use("/api/contact", contactRoutes);
app.use("/api/newsletter", newsletterRoutes);

// Start Server
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
