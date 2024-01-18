import Transaction from "../../../../Model/Transaction";
import connectDB from "../../../../lib/connectDB";
import mongoose from "mongoose";
import User from "../../../../Model/User";

export default async (req, res) => {
  const { userId } = req.query;
  try {
    await connectDB();

    const objectIdUserId = new mongoose.Types.ObjectId(userId);
    const transactions = await Transaction.find({
      user: objectIdUserId,
    }).populate("sender", "name _id");

    return res.status(200).json(transactions);

  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
