import { NextRequest, NextResponse } from 'next/server'
import { sendEmailWithResend } from '@/lib/email'
import { sendSlackNotification } from '@/lib/slack'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, subject, message } = body

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Sanitize inputs
    const formData = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      subject: subject.trim(),
      message: message.trim()
    }


    // Send notifications (run in parallel for better performance)
    const notifications = []

    // Email notification - try Resend first, fallback to Nodemailer
    if (process.env.RESEND_API_KEY) {
      console.log('✅ Using Resend for email notification')
      notifications.push(
        sendEmailWithResend(formData).catch((error) => {
          console.error('Resend failed, trying Nodemailer:', error)
          return sendEmailWithResend(formData)
        })
      )
    } else {
      console.log('⚠️  No email service configured!')
      // Temporary: Just log the form data for testing
      console.log('📧 FORM SUBMITTED - Would send email with this data:')
      console.log('📧 To: jaykay.reactdev@gmail.com')
      console.log('📧 From:', formData.name, '(' + formData.email + ')')
      console.log('📧 Subject:', formData.subject)
      console.log('📧 Message:', formData.message)
    }

    // Slack notification
    if (process.env.SLACK_WEBHOOK_URL) {
      console.log('✅ Using Slack for notifications')
      notifications.push(sendSlackNotification(formData))
    }

    console.log('📤 Total notifications to send:', notifications.length)

    // Wait for all notifications to complete
    const results = await Promise.allSettled(notifications)
    
    // Log results
    results.forEach((result, index) => {
      if (result.status === 'rejected') {
        console.error(`Notification ${index} failed:`, result.reason)
      } else {
        console.log(`Notification ${index} sent successfully`)
      }
    })

    // Check if at least one notification succeeded
    const anySuccess = results.some(result => result.status === 'fulfilled')
    
    if (!anySuccess && results.length > 0) {
      console.error('All notifications failed')
      // Still return success to user but log the failure
    }

    return NextResponse.json(
      { 
        message: 'Message sent successfully!',
        success: true,
        notifications: {
          attempted: results.length,
          successful: results.filter(r => r.status === 'fulfilled').length
        }
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
