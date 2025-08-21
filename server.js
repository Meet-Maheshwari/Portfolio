import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.post("/api/send-email", async (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ success: false, error: "Missing fields" });
  }

  try {
    // Brevo (Sendinblue) SMTP configuration
    const transporter = nodemailer.createTransport({
      host: process.env.BREVO_SMTP_HOST, // e.g. smtp-relay.brevo.com
      port: 587,
      secure: false, // true for 465, false for 587
      auth: {
        user: process.env.BREVO_SMTP_USER, // your Brevo SMTP login
        pass: process.env.BREVO_SMTP_PASS, // your Brevo SMTP password
      },
    });

    await transporter.sendMail({
      from: `Portfolio Contact <${process.env.BREVO_SMTP_USER}>`,
      to: "meetmaheshwari2107@gmail.com",
      subject: `Portfolio Contact from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      replyTo: email,
    });

    res.json({ success: true });
  } catch (error) {
    console.error("Email send error:", error);
    res.status(500).json({ success: false, error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
