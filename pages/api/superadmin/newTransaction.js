import Transaction from "../../../Model/Transaction";
import User from "../../../Model/User";
import connectDB from "../../../lib/connectDB";
import { ObjectId } from "mongoose";

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
      console.log("YES INSIDE");
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
    });

    const savedTransaction = await newTransaction.save();

    if (savedTransaction) {
      res.status(201).json(savedTransaction);
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
