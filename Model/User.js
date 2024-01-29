import mongoose from "mongoose";

const User = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  status: { type: String, default: "Active" },
  displayImage: { type: Buffer },
  description: String,
  roleDescription: String,
  lastCompanies: String,
  fullAddress: String,
  state: String,
  country: String,
  amount: Number,
  namePrefix: String,
  firstName: String,
  lastName: String,
  handle: String,
  timeZone: String,
  companyName: String,
  phoneNumber: String,
  city: String,
  postalCode: String,
  accountDetails: {
    beneficiaryName: String,
    accountNumber: String,
    expiryDate: String,
  },
  pastDueDate: String,
  originationDate: String,
  revolvingLineOfCredit: String,
  companyName: String,
  amountDueDate: String,
  term: String,
  paymentFrequency: String,
  estimatedPayOff: String,
  profileImage: String
});

export default mongoose.models.User || mongoose.model("User", User);
