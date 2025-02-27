import Contact from "../models/Contact.js";

// Handle Contact Form Submission
export const submitContactForm = async (req, res) => {
  try {
    console.log("Received Contact Form Data:", req.body); // Debug log

    // Validate incoming data
    const { name, contactEmail, phone, city, profession } = req.body;
    if (!name || !contactEmail || !phone || !city || !profession) {
      console.error("Missing required fields in request:", req.body);
      return res.status(400).json({ error: "All fields are required" });
    }

    // Save to MongoDB
    const newContact = new Contact({ name, contactEmail, phone, city, profession });
    await newContact.save();

    console.log("Contact saved successfully:", newContact);
    res.status(201).json({ message: "Form submitted successfully" });
  } catch (error) {
    console.error("Error saving contact data:", error);
    res.status(500).json({ error: error.message });
  }
};


