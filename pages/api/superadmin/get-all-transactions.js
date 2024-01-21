import Transaction from "../../../Model/Transaction";
import connectDB from "../../../lib/connectDB";

export default async (req, res) => {
  try {
    await connectDB();
    const allTransactions = await Transaction.find({}).sort({
      transactionDate: -1,
    });

    if (allTransactions) {
      res.json(allTransactions);
    } else {
      res.status(404).json({ error: "Not Transactions Found" });
    }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
