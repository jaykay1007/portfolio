import { Resend } from 'resend'
// import nodemailer from 'nodemailer'

let resendClient: Resend | null = null

const getResendClient = () => {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.warn('⚠️  RESEND_API_KEY is not set. Skipping Resend email sending.')
    return null
  }

  if (!resendClient) {
    resendClient = new Resend(apiKey)
  }

  return resendClient
}

export async function sendEmailWithResend(formData: {
  name: string
  email: string
  subject: string
  message: string
}) {
  try {
    console.log('🚀 Attempting to send email with Resend...')
    console.log('📧 Form data:', { name: formData.name, email: formData.email, subject: formData.subject })
    console.log('🔑 API Key exists:', !!process.env.RESEND_API_KEY)
    
    const resend = getResendClient()

    if (!resend) {
      throw new Error('Missing Resend API key')
    }

    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>', // Using Resend's test domain
      to: ['jaykay.reactdev@gmail.com'], // Your email
      subject: `Portfolio Contact: ${formData.subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #8b5cf6; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${formData.name}</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            <p><strong>Subject:</strong> ${formData.subject}</p>
          </div>
          
          <div style="background: white; padding: 20px; border-left: 4px solid #8b5cf6; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Message:</h3>
            <p style="line-height: 1.6; color: #555;">${formData.message}</p>
          </div>
          
          <div style="background: #f0f9ff; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0; color: #0369a1;">
              <strong>Reply to:</strong> 
              <a href="mailto:${formData.email}" style="color: #0369a1;">${formData.email}</a>
            </p>
          </div>
          
          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;">
          <p style="color: #6b7280; font-size: 14px; text-align: center;">
            Sent from your portfolio contact form at ${new Date().toLocaleString()}
          </p>
        </div>
      `,
    })

    if (error) {
      console.error('❌ Resend error:', error)
      throw error
    }

    console.log('✅ Email sent successfully via Resend:', data)
    return { success: true, data }
  } catch (error) {
    console.error('Resend email failed:', error)
    throw error
  }
}

// Nodemailer service (alternative - works with Gmail, Yahoo, etc.)
// export async function sendEmailWithNodemailer(formData: {
//   name: string
//   email: string
//   subject: string
//   message: string
// }) {
//   try {
//     // Create transporter
//     const transporter = nodemailer.createTransport({
//       service: 'gmail', // or 'yahoo', 'hotmail', etc.
//       auth: {
//         user: process.env.EMAIL_USER, // Your Gmail address
//         pass: process.env.EMAIL_APP_PASSWORD, // App password (not regular password)
//       },
//     })

//     // Email options
//     const mailOptions = {
//       from: process.env.EMAIL_USER,
//       to: 'jaykay.reactdev@gmail.com', // Your email
//       subject: `Portfolio Contact: ${formData.subject}`,
//       html: `
//         <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
//           <h2 style="color: #333; border-bottom: 2px solid #8b5cf6; padding-bottom: 10px;">
//             New Contact Form Submission
//           </h2>
          
//           <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
//             <p><strong>Name:</strong> ${formData.name}</p>
//             <p><strong>Email:</strong> ${formData.email}</p>
//             <p><strong>Subject:</strong> ${formData.subject}</p>
//           </div>
          
//           <div style="background: white; padding: 20px; border-left: 4px solid #8b5cf6; margin: 20px 0;">
//             <h3 style="color: #333; margin-top: 0;">Message:</h3>
//             <p style="line-height: 1.6; color: #555;">${formData.message}</p>
//           </div>
          
//           <div style="background: #f0f9ff; padding: 15px; border-radius: 8px; margin: 20px 0;">
//             <p style="margin: 0; color: #0369a1;">
//               <strong>Reply to:</strong> 
//               <a href="mailto:${formData.email}" style="color: #0369a1;">${formData.email}</a>
//             </p>
//           </div>
          
//           <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;">
//           <p style="color: #6b7280; font-size: 14px; text-align: center;">
//             Sent from your portfolio contact form at ${new Date().toLocaleString()}
//           </p>
//         </div>
//       `,
//       replyTo: formData.email, // Allow easy reply to the sender
//     }

//     // Send email
//     const info = await transporter.sendMail(mailOptions)
//     console.log('Email sent successfully:', info.messageId)
    
//     return { success: true, messageId: info.messageId }
//   } catch (error) {
//     console.error('Nodemailer email failed:', error)
//     throw error
//   }
// }
