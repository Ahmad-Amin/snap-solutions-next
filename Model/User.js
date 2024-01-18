import mongoose from "mongoose";

const User = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  name: String,
  status: {
    type: String,
    default: "Active",
  },
  amount: Number,
  additionalUserDetails: {
    description: String,
    roleDescription: String,
    companyName: String,
    companyAddress: String,
    phoneNumber: String,
    achievements: String,
    references: String,
  },
  investType: {
    name: String,
    role: String,
  },
  displayImage: Buffer,
});

export default mongoose.models.User || mongoose.model("User", User);
