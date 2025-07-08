import express from "express";
import Feedback from "../model/Feedback.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const { feedback } = req.body;

  if (!feedback) {
    return res.status(400).json({
      message: "Feedback is required",
    });
  }

  try {
    const newFeedback = new Feedback({ feedback });
    await newFeedback.save();

    res.status(201).json({ message: "Feedback submitted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
});

export default router;
