import mongoose from "mongoose";

const newsletterSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const NewsLetter = mongoose.models.newsletter || mongoose.model("newsletter", newsletterSchema);

export default NewsLetter;
