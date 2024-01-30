import User from "../../../Model/User";
import Transaction from "../../../Model/Transaction";
import connectDB from "../../../lib/connectDB";
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

const emailGenerateTemplate = (email, password) => {
  return `<!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
<!--[if gte mso 9]>
<xml>
  <o:OfficeDocumentSettings>
    <o:AllowPNG/>
    <o:PixelsPerInch>96</o:PixelsPerInch>
  </o:OfficeDocumentSettings>
</xml>
<![endif]-->
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="x-apple-disable-message-reformatting">
  <!--[if !mso]><!--><meta http-equiv="X-UA-Compatible" content="IE=edge"><!--<![endif]-->
  <title></title>
  
    <style type="text/css">
      @media only screen and (min-width: 550px) {
  .u-row {
    width: 530px !important;
  }
  .u-row .u-col {
    vertical-align: top;
  }

  .u-row .u-col-100 {
    width: 530px !important;
  }

}

@media (max-width: 550px) {
  .u-row-container {
    max-width: 100% !important;
    padding-left: 0px !important;
    padding-right: 0px !important;
  }
  .u-row .u-col {
    min-width: 320px !important;
    max-width: 100% !important;
    display: block !important;
  }
  .u-row {
    width: 100% !important;
  }
  .u-col {
    width: 100% !important;
  }
  .u-col > div {
    margin: 0 auto;
  }
}
body {
  margin: 0;
  padding: 0;
}

table,
tr,
td {
  vertical-align: top;
  border-collapse: collapse;
}

p {
  margin: 0;
}

.ie-container table,
.mso-container table {
  table-layout: fixed;
}

* {
  line-height: inherit;
}

a[x-apple-data-detectors='true'] {
  color: inherit !important;
  text-decoration: none !important;
}

table, td { color: #000000; } #u_body a { color: #0000ee; text-decoration: underline; }
    </style>
  
  

</head>

<body class="clean-body u_body" style="margin: 0;padding: 0;-webkit-text-size-adjust: 100%;background-color: #ffffff;color: #000000">
  <!--[if IE]><div class="ie-container"><![endif]-->
  <!--[if mso]><div class="mso-container"><![endif]-->
  <table id="u_body" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;min-width: 320px;Margin: 0 auto;background-color: #ffffff;width:100%" cellpadding="0" cellspacing="0">
  <tbody>
  <tr style="vertical-align: top">
    <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
    <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color: #ffffff;"><![endif]-->
    
  
  
<div class="u-row-container" style="padding: 0px;background-color: transparent">
  <div class="u-row" style="margin: 0 auto;min-width: 320px;max-width: 530px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
    <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:530px;"><tr style="background-color: transparent;"><![endif]-->
      
<!--[if (mso)|(IE)]><td align="center" width="530" style="background-color: #ffffff;width: 530px;padding: 47px;border-top: 0px dotted transparent;border-left: 0px dotted transparent;border-right: 0px dotted transparent;border-bottom: 0px dotted transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
<div class="u-col u-col-100" style="max-width: 320px;min-width: 530px;display: table-cell;vertical-align: top;">
  <div style="background-color: #ffffff;height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
  <!--[if (!mso)&(!IE)]><!--><div style="box-sizing: border-box; height: 100%; padding: 47px;border-top: 0px dotted transparent;border-left: 0px dotted transparent;border-right: 0px dotted transparent;border-bottom: 0px dotted transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"><!--<![endif]-->
  
<table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
        
<table width="100%" cellpadding="0" cellspacing="0" border="0">
  <tr>
    <td style="padding-right: 0px;padding-left: 0px;" align="center">
      
      <img align="center" border="0" src="https://drive.google.com/uc?export=download&id=1dTcQeegoYdiczPGrcSCc-HdsQ7upvmYU" alt="" title="" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: auto;float: none;width: 100%;max-width: 188px;" width="188"/>
      
    </td>
  </tr>
</table>

      </td>
    </tr>
  </tbody>
</table>

<table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td style="overflow-wrap:break-word;word-break:break-word;padding:1px;font-family:arial,helvetica,sans-serif;" align="left">
        
  <div style="font-size: 14px; line-height: 140%; text-align: left; word-wrap: break-word;">
    <p style="line-height: 140%;"><strong>Hi</strong></p>
<p style="line-height: 140%;"><br />A new account has been made for you at <strong>Snap Credit Solutions</strong></p>
<p style="line-height: 140%;"><strong><br /></strong>Here is your credentials for you dashboard<br /><strong>Email:</strong>${email}<br /><strong>Password:</strong> ${password}<br /><br />Or, you can directly follow this link or copy paste it on your browser and then press Enter</p>
<p style="line-height: 140%;"><br /><a href="https://snapcreditsolutions.com/sign-in/">https://snapcreditsolutions.com/sign-in/</a><br /><br />Thanks,<br />Snap Credit Solutions</p>
  </div>

      </td>
    </tr>
  </tbody>
</table>

  <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
  </div>
</div>
<!--[if (mso)|(IE)]></td><![endif]-->
      <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
    </div>
  </div>
  </div>
  


    <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
    </td>
  </tr>
  </tbody>
  </table>
  <!--[if mso]></div><![endif]-->
  <!--[if IE]></div><![endif]-->
</body>

</html>
`;
}

export default async (req, res) => {
  try {
    await connectDB();
    const {
      name,
      email,
      phoneNumber,
      companyName,
      amount,
      estimatedPayOff,
      pastDueDate,
      originationDate,
      revolvingLineOfCredit,
      amountDueDate,
      term,
      paymentFrequency,
      accountDetails,
      aprFirst15Month,
    } = req.body;

    console.log(req.body)
    if (!email) {
      return res.status(400).json({ error: "Email is required" });
    }
    const dummyPassword = generateDummyPassword();

    const [firstName, lastName] = name.split(" ");

    const newUser = new User({
      email,
      firstName,
      lastName,
      password: dummyPassword,
      phoneNumber,
      companyName,
      amount,
      estimatedPayOff,
      pastDueDate,
      originationDate,
      revolvingLineOfCredit,
      amountDueDate,
      term,
      paymentFrequency,
      accountDetails,
      aprFirst15Month,
    });

    const savedUser = await newUser.save();
    const sender = await User.findOne({ role: "superadmin" });

    const mailOptions = {
      from: "baigahmad323@gmail.com",
      to: email,
      subject: "Welcome to the Snap Credit Solution",
      html: emailGenerateTemplate(email, dummyPassword),
    };

    await transporter.sendMail(mailOptions);
    if (savedUser) {
      const newTransaction = new Transaction({
        receiverName: name,
        transactionDate: new Date(Date.now()),
        user: savedUser.get("_id"),
        amount,
        phoneNumber,
        status: "Done",
        sender: sender,
      });

      const savedTransaction = await newTransaction.save();
      if (!savedTransaction) {
        throw new Error("There is some issue with the transaction");
      }
      res.status(201).json(savedUser);
    } else {
      res.status(404).json({ error: "Issue! while creating the user" });
    }
  } catch (error) {
    res.status(500).json({ error: error });
  }
};
