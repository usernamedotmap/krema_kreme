import mongoose from "mongoose";

const feedbackSchema = new mongoose.Schema({
  feedback: {
    type: String,
    trim: true,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    default: null,
    ref: "User",
  },
});


const feedback = mongoose.model("Feedback", feedbackSchema);

export default feedback;