import User from "../../Model/User";
import { binaryToDataURI } from "./Utils/imageUtils";
import connectDB from "../../lib/connectDB";
import { serialize } from "cookie";

export default async (req, res) => {
  try {
    await connectDB();
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "Email and password are required" });
    }

    let user = await User.findOne({ email, password });

    if (user) {
      user = user.toObject();
      user.displayImage = binaryToDataURI(user.displayImage);
      res.setHeader("Set-Cookie", serialize("userId", user._id));
      res.json(user);
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};





