import User from "../../../Model/User";
import connectDB from "../../lib/connectDB";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_TEST_MAIL,
    pass: process.env.GMAIL_TEST_PASS,
  },
});

const generateDummyPassword = () => {
  const length = 8;
  const charset =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let dummyPassword = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    dummyPassword += charset[randomIndex];
  }

  return dummyPassword;
};

export default async (req, res) => {
  try {
    await connectDB();
    console.log("YES")
    const { name, email, phoneNumber, companyName, inviteLink, amount } =
      req.body;

    if (!email) {
      return res.status(400).json({ error: "Email is required" });
    }
    const dummyPassword = generateDummyPassword();

    const newUser = new User({
      email,
      name,
      password: dummyPassword,
      additionalUserDetails: {
        phoneNumber,
        companyName,
      },
      inviteLink,
      amount,
    });

    const savedUser = await newUser.save();
    const emailTemplate = `
     Hey, You are just been added to the System\nHere is the credentails to Login to the system\n
     Email: ${email}\n
     Password: ${dummyPassword}
    `;

    const mailOptions = {
      from: "baigahmad323@gmail.com",
      to: email,
      subject: "Your Dummy Password",
      text: emailTemplate,
    };

    await transporter.sendMail(mailOptions);

    if (savedUser) {
      res.status(201).json(savedUser);
    } else {
      res.status(404).json({ error: "Issue! while creating the user" });
    }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
