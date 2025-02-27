import Newsletter from "../models/Newsletter.js";

export const subscribeNewsletter = async (req, res) => {
  try {
    const { email } = req.body;

    // Check if email already exists
    const existingSubscriber = await Newsletter.findOne({ email });
    if (existingSubscriber) {
      return res.status(400).json({ message: "Email already subscribed" });
    }

    const newSubscriber = new Newsletter({ email });
    await newSubscriber.save();
    res.status(201).json({ message: "Successfully subscribed to the newsletter" });
  } catch (error) {
    res.status(500).json({ error: "Failed to subscribe" });
  }
};
