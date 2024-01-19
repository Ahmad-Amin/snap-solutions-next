import User from "../../Model/User";
import connectDB from "../../lib/connectDB";

export default async (req, res) => {
  try {
    await connectDB();

    const updatedUserData = {
      $set: req.body,
    };

    const currentPassword = req.body.currentPassword;
    const newPassword = req.body.newPassword;

    if (newPassword && currentPassword) {
      const user = await User.findById(req.body._id)
      if (user.password === currentPassword) {
        updatedUserData.$set['password'] = newPassword
      } else {
        return res
          .status(404)
          .json({ error: "Current and New Password does not Matched" });
      }
    }

    console.log(req.body)
    console.log(updatedUserData);



    const updatedUser = await User.findOneAndUpdate(
      { _id: req.body._id },
      updatedUserData,
      { returnDocument: "after" }
    );

    console.log(updatedUser)
    if (updatedUser) {
      // updatedUser.displayImage = binaryToDataURI(updatedUser.displayImage);
      return res.json(updatedUser);
    } else {
      return res.status(404).json({ error: "User not found" });
    }
    
  } catch (error) {
    res.status(500).json({ error: error });
  }
};
