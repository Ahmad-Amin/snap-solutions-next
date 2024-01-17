import mongoose from "mongoose";

const Transaction = new mongoose.Schema({
  receiverName: String,
  transactionType: String,
  status: String,
  transactionDate: Date,
  amount: Number,
  transactionMessage: String,
  phoneNumber: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

export default mongoose.models.Transaction ||
  mongoose.model("Transaction", Transaction);
