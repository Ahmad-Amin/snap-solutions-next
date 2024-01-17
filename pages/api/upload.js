import multiparty from "multiparty";
import connectDB from "../../lib/connectDB";
import File from "../../Model/File";
// import fs from "fs";
import multer from "multer";
import nextConnect from "next-connect";
import User from '../../Model/User'

// const upload = multer();
// const handler = nc();
const upload = multer();
const handler = nextConnect();
handler.use(upload.single("file"));

handler.post(async (req, res) => {
  try {
    await connectDB();
    const { originalname, size, mimetype, buffer } = req.file;

    // Assuming userId is sent in the request body
    const { userId } = req.body;

    // Check if the user exists
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Create a new File document
    const file = new File({
      filename: originalname,
      size,
      fileType: mimetype,
      data: buffer,
      user: user._id,
      timeOfUpload: new Date(),
    });

    // Save the file to MongoDB
    await file.save();

    res.status(201).json({ message: "File uploaded successfully" });
  } catch (error) {
    console.error("Error uploading file:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
