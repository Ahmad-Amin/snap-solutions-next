import User from "../../../../Model/User";
import connectDB from '../../../../lib/connectDB'

export default async (req, res) => {
  const { userId } = req.query;
  try {
    await connectDB();
    const user = await User.findById(userId);

    return res.status(200).json(user);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
