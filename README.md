# 🚨 Real-Time Email Alert System using GCP

This project implements a real-time automated email alert system using Google Cloud Platform (GCP). Whenever a `.txt` file is uploaded to Cloud Storage, its contents are automatically emailed using SendGrid via a serverless pipeline.

---

## 🌐 Cloud Services Used

| Cloud Service   | Category       | Purpose                                        |
| --------------- | -------------- | ---------------------------------------------- |
| Cloud Storage   | Storage        | Upload `.txt` message files                    |
| Cloud Functions | Compute/Event  | Triggered on file upload, publishes to Pub/Sub |
| Pub/Sub         | Messaging      | Sends messages from function to Cloud Run      |
| Cloud Run       | Compute/API    | Processes messages and sends emails            |
| SendGrid API    | SaaS/3rd-party | Sends email based on file contents             |

---

## 💡 How It Works

1. A `.txt` file is uploaded to the Cloud Storage bucket
2. A Cloud Function is triggered:

   * Reads the uploaded file
   * Extracts and formats the content
   * Publishes a structured JSON message to a Pub/Sub topic
3. Pub/Sub sends this message to a Cloud Run service
4. Cloud Run:

   * Decodes the message
   * Sends an email via the SendGrid API
5. The email is received in real time by the configured inbox

---

## 🚀 How to Use

### 1. Upload a `.txt` File:

```bash
echo "⚠️ Test alert from Vedant" > test.txt
gsutil cp test.txt gs://auto-responder-bucket-vedant/
```

### 2. Receive an Email:

* **From:** [vedantshelke028@gmail.com](mailto:vedantshelke028@gmail.com)
* **To:** [vedantshelke028@gmail.com](mailto:vedantshelke028@gmail.com)
* **Subject:** `New Message from test.txt`
* **Body:** Content of the uploaded file

---

## 📁 Project Structure

```
cloud-run/
|
├── app.js               # Express app with SendGrid integration
├── package.json         # Node.js dependencies
├── Dockerfile           # Container setup for Cloud Run
├── README.md            # Project documentation
```

---

## 💪 Git & GitHub Integration

Project is tracked and version-controlled on GitHub.

### Git Commands Used:

```bash
git init                              # Start a local Git repo
git remote add origin https://github.com/VIT-07/email-alert-system-gcp.git
                                      # Link to remote repo
git add .                             # Add files
git commit -m "Initial commit"
git push -u origin main               # Push to GitHub
```

### Optional:

```bash
git clone https://github.com/VIT-07/email-alert-system-gcp.git
# Clones repo to local/cloud environment
```

---

## 📌 GitHub Repository

> [https://github.com/VIT-07/email-alert-system-gcp](https://github.com/VIT-07/email-alert-system-gcp)

---

## ✨ Extra Features

* Can be extended to capture GPS or location data using Google Maps API
* Easily integrates with frontend file upload forms
* Uses environment variables to securely manage secrets like API keys
* Fully serverless, scalable, and production-friendly

---

## 👩‍💼 Author

**Vedant Shelke**
B.Tech Project | 2025
