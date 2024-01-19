import Transaction from "../../../Model/Transaction";
import User from "../../../Model/User";
import connectDB from "../../../lib/connectDB";
import { ObjectId } from "mongoose";
import mongoose from "mongoose";

export default async (req, res) => {
  try {
    await connectDB();
    const query = { role: { $ne: "superadmin" } };
    const users = await User.find(query);

    if (users) {
      res.json(users);
    } else {
      res.status(404).json({ error: "No Users Found" });
    }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
