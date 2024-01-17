import mongoose from "mongoose";

const File = new mongoose.Schema({
  filename: String,
  size: Number,
  fileType: String,
  data: Buffer, // Binary data
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  timeOfUpload: Date
});

export default mongoose.models.File || mongoose.model("File", File);
