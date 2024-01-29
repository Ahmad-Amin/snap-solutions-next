import User from "../../Model/User";
import connectDB from "../../lib/connectDB";

export default async (req, res) => {
  try {
    await connectDB();

    console.log(req)
    const userRecord = JSON.parse(req.body)

    const updatedUserData = {
      $set: userRecord,
    };

    const currentPassword = userRecord.currentPassword;
    const newPassword = userRecord.newPassword;

    if (newPassword && currentPassword) {
      const user = await User.findById(userRecord._id);
      if (user.password === currentPassword) {
        updatedUserData.$set['password'] = newPassword
      } else {
        return res
          .status(404)
          .json({ error: "Current and New Password does not Matched" });
      }
    }

    // console.log(req.body)
    // console.log(updatedUserData);



    const updatedUser = await User.findOneAndUpdate(
      { _id: userRecord._id },
      updatedUserData,
      { returnDocument: "after" }
    );

    // console.log(updatedUser)
    if (updatedUser) {
      // updatedUser.displayImage = binaryToDataURI(updatedUser.displayImage);
      return res.json(updatedUser);
    } else {
      return res.status(404).json({ error: "User not found" });
    }
    
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error });
  }
};
