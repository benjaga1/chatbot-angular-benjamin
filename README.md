# Chatbot Angular Application Assignment

**Author:** Benjamin Pašić

This is a small Angular application created as part of a frontend assignment. The app allows a user to:

1. Create a chatbot configuration with name, personality (slider 0.0–1.0), and description.  
2. Upload a knowledge base (.txt) file list, display uploaded files, and optionally delete files.  
3. Test the chatbot with a simulated chat interface that shows user and bot messages, with bot responses delayed.

## Real-Time Chat Implementation Suggestions

1. **What approach you'd use (WebSocket, SSE, long polling, etc.)?**  
   I would use **WebSockets**.

2. **Why did you choose it?**  
   I would choose WebSockets because they enable full-duplex communication, allowing the server to push messages to the client instantly. This creates a true real-time chat experience without the lag associated with traditional HTTP requests. Unlike polling, WebSockets maintain a single open connection. This approach ensures that users receive messages the moment they are sent, making the interaction feel seamless and fluid.

3. **Any libraries/tools you'd consider using in Angular?**  
   I would consider using `@ngx-socket-io` or RxJS `WebSocketSubject` to manage WebSocket connections efficiently and real-time, bidirectional communication.

4. **What would you improve with more time?** 
   - Store chat history in a database for persistence.  
   - Support multiple users or chatbots simultaneously.  
   - Enhance bot responses with smarter logic or backend AI integration. 

## Prerequisites

Make sure you have the following installed before running the project:

- **Recommended IDE: Visual Studio Code (VS Code)** – https://code.visualstudio.com
- **Node.js** (version 18+ recommended, version used in project -> v22.12.0) – [https://nodejs.org](https://nodejs.org)  
- **npm** (comes with Node.js)  
- **Angular CLI** (latest version, version used in project -> 21.2.6) – install globally using:  
  ```bash
  npm install -g @angular/cli
  ```
    
## How to Run the Application

1. Clone the repository:

```bash
git clone https://github.com/benjaga1/chatbot-angular-benjamin.git
cd chatbot-angular-benjamin
```
2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
ng serve
```

4. Open the app in your browser at http://localhost:4200
