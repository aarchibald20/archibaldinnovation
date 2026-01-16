import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const body = await req.json();
  const { name, email, message } = body;

  if (!name || !email || !message) {
    return new Response("Missing fields", { status: 400 });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail", // Gmail SMTP
      auth: {
        user: "archibaldinnovations@gmail.com", // your Gmail
        pass: "cosj xyhe nhla pxna",   // the 16-char app password
      },
    });

    await transporter.sendMail({
      from: `"${name}" <${email}>`, // who the message appears from
      to: "archibaldinnovations@gmail.com",    // where you want to receive the message
      subject: "New Free Consultation Request",
      text: message,
      html: `<p>${message}</p><p>From: ${name} (${email})</p>`,
    });

    return new Response("Message sent", { status: 200 });
  } catch (err) {
    console.error(err);
    return new Response("Failed to send", { status: 500 });
  }
}
