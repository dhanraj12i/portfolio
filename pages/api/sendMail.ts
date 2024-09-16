import type { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

const sendMail = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    console.log("API Key:", process.env.NEXT_PUBLIC_RESEND_API_KEY);

    const { email, subject, description } = req.body;

    const emailContent = `<div>
        <h1>${subject}</h1>
        <p>Description: ${description}</p>
        <p>email: ${email}</p>
      </div>`;

    const { data, error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["dhanraj12061998@gmail.com"],
      subject: subject || "Hello world",
      html: emailContent,
      tags: [
        {
          name: "category",
          value: "portFolio_Email",
        },
      ],
    });

    if (error) {
      return res.status(400).json({ error: error.message });
    }

    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Unexpected error occurred." });
  }
};

export default sendMail;
