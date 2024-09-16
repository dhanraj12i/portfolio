import type { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

const sendMail = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    // Log the API key for debugging purposes (optional)
    console.log("API Key:", process.env.NEXT_PUBLIC_RESEND_API_KEY);

    const { email, subject, description } = req.body;

    if (!email || !subject || !description) {
      return res.status(400).json({
        error: "Missing required fields: email, subject, or description.",
      });
    }

    // Create the email content
    const emailContent = `<div>
        <h1>${subject}</h1>
        <p>Description: ${description}</p>
        <p>Email: ${email}</p>
      </div>`;

    // Send the email using the Resend API
    const response = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["dhanraj12061998@gmail.com"], // Replace with the recipient's email
      subject: subject || "Hello world",
      html: emailContent,
      tags: [
        {
          name: "category",
          value: "portfolio_email",
        },
      ],
    });

    // Check for errors
    if (response.error) {
      return res.status(400).json({ error: response.error.message });
    }

    // Respond with success
    res.status(200).json({ success: true, data: response });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Unexpected error occurred." });
  }
};

export default sendMail;
