export async function sendSlackNotification(formData: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) {
  try {
    const webhookUrl = process.env.SLACK_WEBHOOK_URL;

    if (!webhookUrl) {
      console.log("Slack webhook URL not configured");
      return { success: false, error: "Webhook URL not configured" };
    }

    const payload = {
      text: "New Portfolio Contact Form Submission! 📧",
      blocks: [
        {
          type: "header",
          text: {
            type: "plain_text",
            text: "🚀 New Contact Form Submission",
          },
        },
        {
          type: "divider",
        },
        {
          type: "section",
          fields: [
            {
              type: "mrkdwn",
              text: `*Name:*\n${formData.name}`,
            },
            {
              type: "mrkdwn",
              text: `*Email:*\n${formData.email}`,
            },
            {
              type: "mrkdwn",
              text: `*Subject:*\n${formData.subject}`,
            },
            {
              type: "mrkdwn",
              text: `*Time:*\n${new Date().toLocaleString()}`,
            },
          ],
        },
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: `*Message:*\n\`\`\`${formData.message}\`\`\``,
          },
        },
        {
          type: "divider",
        },
        {
          type: "actions",
          elements: [
            {
              type: "button",
              text: {
                type: "plain_text",
                text: "Reply via Email 📧",
              },
              url: `mailto:${formData.email}?subject=Re: ${formData.subject}`,
              style: "primary",
            },
          ],
        },
        {
          type: "context",
          elements: [
            {
              type: "mrkdwn",
              text: `📍 Sent from portfolio contact form • Priority: ${
                formData.subject.toLowerCase().includes("urgent")
                  ? "🔴 High"
                  : "🟡 Normal"
              }`,
            },
          ],
        },
      ],
    };

    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Slack API error: ${response.status} - ${errorText}`);
    }

    console.log("Slack notification sent successfully");
    return { success: true };
  } catch (error) {
    console.error("Slack notification failed:", error);
    throw error;
  }
}

// Alternative simple Slack notification
export async function sendSimpleSlackNotification(formData: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) {
  try {
    const webhookUrl = process.env.SLACK_WEBHOOK_URL;

    if (!webhookUrl) {
      console.log("Slack webhook URL not configured");
      return { success: false, error: "Webhook URL not configured" };
    }

    const message = `
🚀 *New Contact Form Submission*

*From:* ${formData.name} (${formData.email})
*Subject:* ${formData.subject}
*Time:* ${new Date().toLocaleString()}

*Message:*
\`\`\`
${formData.message}
\`\`\`

Reply: mailto:${formData.email}?subject=Re: ${formData.subject}
    `.trim();

    const payload = {
      text: message,
      username: "Portfolio Bot",
      icon_emoji: ":email:",
      channel: "#general", // or specific channel
    };

    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`Slack webhook failed: ${response.status}`);
    }

    console.log("Simple Slack notification sent successfully");
    return { success: true };
  } catch (error) {
    console.error("Simple Slack notification failed:", error);
    throw error;
  }
}
