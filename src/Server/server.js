// server.js

require("dotenv").config();
const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();

app.use(
  cors({
    origin: "*",
  })
);

app.post("/api/confirmation", async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({
      status: "error",
      message: "Email is required",
    });
  }

  const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;

  try {
    const response = await axios.post(
      "https://api.sendgrid.com/v3/mail/send",
      {
        personalizations: [
          {
            to: [
              {
                email: email,
              },
            ],
            subject: "Confirm your email",
          },
        ],
        from: {
          email: "your-email@example.com",
          name: "Your Name",
        },
        content: [
          {
            type: "text/plain",
            value: "Please confirm your email by visiting this link: http://confirm-email.com",
          },
        ],
      },
      {
        headers: {
          Authorization: `Bearer ${SENDGRID_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (response.status === 202) {
      return res.status(200).json({
        status: "success",
        message: "Email sent successfully",
      });
    }

    return res.status(500).json({
      status: "error",
      message: "An error occurred while sending the email",
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: "An error occurred while sending the email",
      error: error.toString(),
    });
  }
});

// Replace the port number with the one you want to use
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});