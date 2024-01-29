import User from "../../Model/User";
import connectDB from "../../lib/connectDB";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { IncomingForm } from "formidable";
import fs from "fs/promises";
import mongoose from "mongoose";

export const config = {
  api: {
    bodyParser: false, // Disable built-in body parsing
  },
};

const s3Client = new S3Client({
  region: process.env.NEXT_PUBLIC_AWS_S3_REGION,
  credentials: {
    accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY,
  },
});

const uploadFileToS3 = async (file, fileName) => {
  const fileBuffer = file;

  const params = {
    Bucket: process.env.NEXT_PUBLIC_AWS_BUCKET_NAME,
    Key: `profileImage/${fileName}-${Date.now()}`,
    Body: fileBuffer,
    ContentType: "image/jpg",
  };

  const command = new PutObjectCommand(params);
  await s3Client.send(command);

  const objectUrl = `https://${process.env.NEXT_PUBLIC_AWS_BUCKET_NAME}.s3.amazonaws.com/${params.Key}`;
  return objectUrl;
};

export default async (req, res) => {
  try {
    const form = new IncomingForm();
    form.parse(req, async (err, fields, files) => {
      if (err) {
        console.error("Error parsing form:", err);
        res.status(500).json({ error: "Internal Server Error" });
        return;
      }

      console.log(fields);
      const { file } = files;
      if (!file) {
        return res.status(400).json({ error: "File is Required" });
      }

      const buffer = await fs.readFile(file[0].filepath);
      const objectUrl = await uploadFileToS3(buffer, file[0].originalFilename);

      if (objectUrl) {
        const userId = fields["userId"][0];
        const objectIdUserId = new mongoose.Types.ObjectId(userId);
        const user = await User.findById(objectIdUserId);

        const updatedUser = await User.findOneAndUpdate(
          { _id: objectIdUserId },
          {
            $set: {
              profileImage: objectUrl,
            },
          },
          { returnDocument: "after" }
        );

        return res
          .status(200)
          .json({ success: "File Uploaded successfuly", updatedUser });
      } else {
        res.status(500).json({ message: "Issue while updating the record" });        
      }

      
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error });
  }
};

// import User from "../../Model/User";
// import connectDB from "../../lib/connectDB";

// export default async (req, res) => {
//   try {
//     await connectDB();

//     console.log(req)
//     const userRecord = JSON.parse(req.body)

//     const updatedUserData = {
//       $set: userRecord,
//     };

//     const currentPassword = userRecord.currentPassword;
//     const newPassword = userRecord.newPassword;

//     if (newPassword && currentPassword) {
//       const user = await User.findById(userRecord._id);
//       if (user.password === currentPassword) {
//         updatedUserData.$set['password'] = newPassword
//       } else {
//         return res
//           .status(404)
//           .json({ error: "Current and New Password does not Matched" });
//       }
//     }

//     // console.log(req.body)
//     // console.log(updatedUserData);

//     const updatedUser = await User.findOneAndUpdate(
//       { _id: userRecord._id },
//       updatedUserData,
//       { returnDocument: "after" }
//     );

//     // console.log(updatedUser)
//     if (updatedUser) {
//       // updatedUser.displayImage = binaryToDataURI(updatedUser.displayImage);
//       return res.json(updatedUser);
//     } else {
//       return res.status(404).json({ error: "User not found" });
//     }

//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ error: error });
//   }
// };
