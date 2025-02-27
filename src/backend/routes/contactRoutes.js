import express from "express";
import { submitContactForm } from "../controllers/contactController.js";

const router = express.Router();

// Correctly use the `submitContactForm` controller
router.post("/", submitContactForm);

export default router;
