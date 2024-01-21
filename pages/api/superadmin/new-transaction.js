import Transaction from "../../../Model/Transaction";
import User from "../../../Model/User";
import connectDB from "../../../lib/connectDB";
import { ObjectId } from "mongoose";
import mongoose from "mongoose";

export default async (req, res) => {
  try {
    await connectDB();
    const {
      phoneNumber,
      amount,
      message: transactionMessage,
      recipient: userId,
      transactionType,
      senderId,
    } = req.body;

    if (!(amount || userId)) {
      return res.status(400).json({ error: "No amount or recipient is given" });
    }

    const receiver = await User.findById(userId);
    const sender = await User.findById(senderId);

    if (!receiver) {
      return res
        .status(404)
        .json({ error: "User not found, Can't Process Request" });
    }

    if (sender.get("role") !== "superadmin") {
      return res
        .status(401)
        .json({ error: "You are not authorized to perform this Action" });
    }

    const newTransaction = new Transaction({
      receiverName: receiver.get("name"),
      transactionDate: new Date(Date.now()),
      user: receiver.get("_id"),
      transactionType,
      amount,
      phoneNumber,
      status: "Done",
      transactionMessage,
      sender: sender.get("_id"),
    });

    const savedTransaction = await newTransaction.save();

    const objectIdUserId = new mongoose.Types.ObjectId(receiver.get("_id"));
    if (savedTransaction) {
      const savedTrans = await User.findOneAndUpdate(
        { _id: objectIdUserId },
        { $inc: { amount: amount } },
        { new: true }
      );

      if (savedTrans) {
        res.status(201).json({ savedTransaction, savedTrans });
      } else {
        throw new Error("There is some issue, while sending the transaction") 
      }
    } else {
      res
        .status(404)
        .json({ error: "Cannot Created Transaction due to some issue" });
    }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
