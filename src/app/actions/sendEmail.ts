// actions/sendEmail.ts
'use server';

import nodemailer from 'nodemailer';
import { z } from 'zod';

const formSchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters." }),
    email: z.email({ message: "Invalid email address." }),
    message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export async function submitContactForm(initialState: any, formData: FormData) {
    const parsed = formSchema.safeParse(Object.fromEntries(formData));
    if (!parsed.success) {
        const tree = z.treeifyError(parsed.error);
        return { error: tree.errors };
    }

    const { name, email, message } = parsed.data;

    const transporter = nodemailer.createTransport({
        service: 'gmail', // Or use another SMTP service
        auth: {
            user: process.env.MY_EMAIL,
            pass: process.env.MY_EMAIL_PASSWORD,
        },
    });

    const mailOptions = {
        from: process.env.MY_EMAIL,
        to: process.env.MY_EMAIL,
        subject: `New contact from ${name}`,
        html: `
      <p>Name: ${name}</p>
      <p>Email: ${email}</p>
      <p>Message: ${message}</p>
    `,
    };

    try {
        await transporter.sendMail(mailOptions);
        return { success: true };
    } catch (error) {
        console.error(error);
        return { error: 'Failed to send message.' };
    }
}
