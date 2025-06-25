# 🚨 Real-Time Email Alert System using GCP

This project implements a real-time automated email alert system using Google Cloud Platform (GCP).  
Whenever a `.txt` file is uploaded to Cloud Storage, its contents are emailed automatically using SendGrid — all without any manual steps.

---

## 🌐 Tech Stack / Cloud Services Used

| Service                | Purpose                                               |
|------------------------|--------------------------------------------------------|
| **Cloud Storage**      | Stores uploaded `.txt` message files                  |
| **Cloud Functions**    | Triggered on file upload, reads content, publishes to Pub/Sub |
| **Pub/Sub**            | Delivers messages from function to Cloud Run          |
| **Cloud Run**          | Processes Pub/Sub messages and sends emails           |
| **SendGrid API**       | Sends the actual emails                               |

---

## 💡 How It Works

1. User uploads a `.txt` file to a Cloud Storage bucket
2. A Cloud Function is triggered:
   - Reads the file
   - Extracts its contents
   - Publishes a structured message to a Pub/Sub topic
3. Pub/Sub pushes the message to a Cloud Run service
4. Cloud Run:
   - Decodes the message
   - Uses SendGrid to email the file contents
5. The email is received instantly at the configured inbox

---

## 🚀 How to Use

### 1. Upload a file:


echo "⚠️ Test alert from Vedant" > test.txt
gsutil cp test.txt gs://auto-responder-bucket-vedant/

### 2. You’ll receive an email:

From: vedantshelke028@gmail.com

Subject: New Message from test.txt

Body: File content

## Project Structure:
cloud-run/
│
├── app.js               # Express app with SendGrid integration
├── package.json         # Node.js dependencies
├── Dockerfile           # Container setup for Cloud Run
├── README.md            # This file


#
👨‍💻 Author
Vedant Shelke
Cloud Project | 2025

