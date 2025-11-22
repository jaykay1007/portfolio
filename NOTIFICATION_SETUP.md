# 📧 Notification Services Setup Guide

This guide will help you set up email and Slack notifications for your portfolio contact form.

## 🚀 Installation

First, install the required packages:

```bash
npm install resend nodemailer @types/nodemailer
```

## 📧 Email Setup Options

### Option 1: Resend (Recommended)

**Why Resend?** Modern, developer-friendly, reliable deliverability, great free tier.

1. **Sign up at [Resend](https://resend.com/)**
2. **Get your API key** from the dashboard
3. **Verify your domain** (or use their subdomain for testing)
4. **Add to .env.local:**
   ```
   RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
   ```

### Option 2: Gmail with Nodemailer

**Why Gmail?** Free, easy setup if you already have Gmail.

1. **Enable 2-Factor Authentication** on your Gmail account
2. **Create an App Password:**
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate a 16-character password
3. **Add to .env.local:**
   ```
   EMAIL_USER=your-email@gmail.com
   EMAIL_APP_PASSWORD=your-16-character-app-password
   ```

### Option 3: Other Email Providers

You can easily modify the Nodemailer config for:
- **Yahoo:** `service: 'yahoo'`
- **Outlook:** `service: 'hotmail'`
- **Custom SMTP:** Use host/port configuration

## 💬 Slack Setup

1. **Create a Slack App:**
   - Go to [Slack API](https://api.slack.com/apps)
   - Click "Create New App" → "From scratch"
   - Name your app (e.g., "Portfolio Bot")

2. **Create Incoming Webhook:**
   - In your app settings, go to "Incoming Webhooks"
   - Turn on "Activate Incoming Webhooks"
   - Click "Add New Webhook to Workspace"
   - Choose the channel to receive notifications

3. **Add webhook URL to .env.local:**
   ```
   SLACK_WEBHOOK_URL=your-slack-webhook-url
   ```

## 🛠️ Configuration

Create a `.env.local` file in your project root:

```bash
# Copy the example file
cp .env.example .env.local
```

Fill in your credentials:

```env
# Choose one email option
RESEND_API_KEY=re_your_key_here
# OR
EMAIL_USER=your-email@gmail.com
EMAIL_APP_PASSWORD=your-app-password

# Optional: Slack notifications
SLACK_WEBHOOK_URL=your-webhook-url

NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## ✅ Testing

1. **Start your development server:**
   ```bash
   npm run dev
   ```

2. **Test the contact form** on your portfolio

3. **Check the console logs** for notification status

4. **Verify emails and Slack messages** are received

## 🚨 Troubleshooting

### Email Issues

**Resend:**
- Verify your domain in Resend dashboard
- Check API key is correct
- Ensure you're not hitting rate limits

**Gmail:**
- Make sure 2FA is enabled
- Use App Password, not regular password
- Check "Less secure app access" is disabled (use App Password instead)

### Slack Issues

- Verify webhook URL is complete and correct
- Check the Slack app has permission to post to the channel
- Test webhook URL with a simple curl request

### Environment Variables

- Restart your dev server after adding env variables
- Make sure .env.local is in project root
- Don't commit .env.local to git (it's in .gitignore)

## 📈 Production Deployment

### Vercel
1. Add environment variables in Vercel dashboard
2. Redeploy your application

### Netlify
1. Add environment variables in Netlify dashboard
2. Redeploy your application

### Other Platforms
Add the environment variables through your platform's dashboard or CLI.

## 🔒 Security Notes

- **Never commit** API keys or credentials to version control
- **Use App Passwords** for Gmail, not your main password
- **Rotate keys regularly** for enhanced security
- **Monitor usage** to detect any unusual activity

## 🎯 Features Included

✅ **Email Notifications:**
- Beautiful HTML templates
- Sender information and reply-to setup
- Professional formatting
- Error handling and fallbacks

✅ **Slack Notifications:**
- Rich message formatting with blocks
- Quick reply button
- Timestamp and priority detection
- Channel customization

✅ **Robust Error Handling:**
- Fallback between email services
- Graceful failure (form still works if notifications fail)
- Detailed logging for debugging
- Parallel processing for better performance

## 🚀 Next Steps

1. Set up your preferred email service
2. Configure Slack webhook (optional)
3. Test thoroughly in development
4. Deploy to production
5. Monitor logs for any issues

Your portfolio contact form is now enterprise-ready! 🎉
