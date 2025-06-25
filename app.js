const express = require('express');
const bodyParser = require('body-parser');
const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY); // Will be set as environment variable

const app = express();
app.use(bodyParser.json());

app.post('/', async (req, res) => {
  const message = req.body.message;

  if (!message || !message.data) {
    console.log("Invalid Pub/Sub message");
    return res.status(400).send("Bad Request");
  }

  const decodedData = Buffer.from(message.data, 'base64').toString();
  const json = JSON.parse(decodedData);

  console.log("📩 New Message Received:");
  console.log("File:", json.file);
  console.log("Content:", json.content);
  console.log("Timestamp:", json.timestamp);

  const emailMsg = {
    to: 'vedant.shelke@vit.edu.in',                 // Receiver (your inbox)
    from: 'vedantshelke028@gmail.com',                // Verified sender on SendGrid
    subject: `New Message from ${json.file}`,
    text: json.content,
    html: `<p><strong>Message:</strong></p><p>${json.content}</p><br><small>${json.timestamp}</small>`
  };

  try {
    await sgMail.send(emailMsg);
    console.log("✅ Email sent!");
  } catch (error) {
    console.error("❌ Error sending email:", error.toString());
  }

  res.status(200).send("OK");
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
