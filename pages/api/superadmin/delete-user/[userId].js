import User from "../../../../Model/User";
import connectDB from "../../../../lib/connectDB";
import mongoose from "mongoose";

export default async (req, res) => {
  const { userId } = req.query;
  try {
    await connectDB();

    const objectIdUserId = new mongoose.Types.ObjectId(userId);
    const result = await User.findByIdAndDelete(objectIdUserId);

    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json({ message: "User not found or not deleted" });
    }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

