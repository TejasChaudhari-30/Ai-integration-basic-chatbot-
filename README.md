# AI Chatbot with Gemini API Integration

## 📌 Overview

This project is a basic AI-powered chatbot built using the Google Gemini API. The chatbot supports conversational interactions and stores chat history to maintain context across conversations. By leveraging previous chat records, the system can generate more relevant and personalized responses, improving the overall user experience.

## ✨ Features

* 🤖 AI-powered conversations using Gemini API
* 💾 Persistent chat history storage
* 🧠 Context-aware responses based on previous conversations
* ⚡ Fast and interactive chat interface
* 🔄 Continuous conversation memory for improved future responses
* 📈 Scalable architecture for future enhancements

## 🛠️ Technologies Used

* Python / JavaScript (Update according to your project)
* Google Gemini API
* Database (SQLite / MongoDB / MySQL)
* REST API / Backend Framework
* HTML, CSS, JavaScript (if applicable)

## 📂 Project Structure

```text
project/
│
├── app.py / server.js
├── chatbot/
│   ├── gemini_integration.py
│   ├── chat_history.py
│   └── response_generator.py
│
├── database/
│   └── chat_history.db
│
├── static/
├── templates/
├── requirements.txt
└── README.md
```

## 🚀 Getting Started

### Prerequisites

*  Node.js  
* Google Gemini API Key

### Installation

1. Clone the repository:

```bash
git clone https://github.com/TejasChaudhari-30/Ai-integration-basic-chatbot-/tree/main
```

2. Navigate to the project directory:
for starting backend server
```bash
cd /backend

3. Install dependencies:

```bash
npm install
```
then for runing server run 
node main.js
on bash

```


3. Install dependencies:

```bash
npm install
```

4. Configure your Gemini API key:

Create a `.env` file and add:

```env
create your owngemini api to use locally  
api_key=your_created gemini_api_key_here
```

5. Start the application:

6. start frontend
7. cd ~yourdirectory/frontend/my-react-app
8. run : npm i
9. then
10. npm run dev // for starting front end react app
11. 

```

## 💬 How It Works

1. User sends a message to the chatbot.
2. The message is stored in the chat history database.
3. Previous conversation context is retrieved.
4. Gemini API processes the current message along with historical context.
5. The chatbot generates a more relevant and personalized response.
6. The response is stored for future interactions.

## 📊 Future Improvements

* User authentication and profiles
* Long-term memory optimization
* Conversation summarization
* Multi-session chat support
* Voice input and output
* Sentiment analysis
* Vector database integration for advanced memory retrieval

## 🔒 Security Notes

* Never expose your Gemini API key publicly.
* Store sensitive credentials using environment variables.
* Implement rate limiting for production deployments.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome. Feel free to fork the repository and submit a pull request.

## 📜 License

This project is licensed under the MIT License.

## 👨‍💻 Author

Developed as a learning project to explore AI integration, conversational memory, and context-aware chatbot systems using Google's Gemini API.
