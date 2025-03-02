import nodemailer from "nodemailer";

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method Not Allowed" });
    }

    const { email, message } = req.body;

    if (!email || !message || email.trim() === "" || message.trim() === "") {
        return res.status(400).json({ error: "Missing email or message" });
    }

    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        await transporter.sendMail({
            from: email,
            to: process.env.EMAIL_TO,
            subject: `Message from ${email}`,
            text: message,
            html: `<p><strong>Contact:</strong> ${email}</p><p>${message}</p>`,
        });

        return res.status(200).json({ success: "Email sent!" });
    } catch (error) {
        return res.status(500).json({ error: "Internal server error" });
    }
}
