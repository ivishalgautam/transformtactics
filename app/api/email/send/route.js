import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const formData = await request.formData();
    const fullname = formData.get("fullname");
    const email = formData.get("email");
    const phone = formData.get("number");
    const company = formData.get("company");
    const message = formData.get("message");

    const mail = await transporter.sendMail({
      from: process.env.NEXT_PUBLIC_EMAIL,
      to: process.env.NEXT_PUBLIC_EMAIL,
      replyTo: process.env.NEXT_PUBLIC_EMAIL,
      subject: `Website Enquiry from ${email}`,
      html: `
        <p>Fullname: ${fullname} </p>
        <p>Email: ${email} </p>
        <p>Phone: ${phone} </p>
        <p>Company: ${company} </p>
        <p>Message: ${message} </p>
        `,
    });
    return Response.json({ message: "Success: email was sent" });
    // return Response.json({ name, email, message }, { status: 500 });
  } catch (error) {
    console.log({ error });
    return Response.json({ error }, { status: 500 });
  }
}

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: "465",
  secure: true,
  auth: {
    user: process.env.NEXT_PUBLIC_EMAIL,
    pass: process.env.NEXT_PUBLIC_EMAIL_PASSWORD,
  },
});
