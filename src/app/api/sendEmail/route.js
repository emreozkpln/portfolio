
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export const sendEmail = async (email, name, subject, message) => {
    try {
        if (!message) {
            return {
                error: 'Invalid message'
            }
        }

        resend.emails.send({
            from: 'onboarding@resend.dev',
            to: 'ozkaplanemre1@gmail.com',
            subject: subject,
            reply_to: email,
            html: `
            <h1>Portfolyo Website Contact</h1>
            <h3>Sender Email: ${email}</h3>
            <h3>Name: ${name}</h3>
            <p>${message}</p>
            `
        })

        return {
            status: 200
        }

    } catch (error) {
        console.log(error);
        return {
            status: 500
        }
    }
}