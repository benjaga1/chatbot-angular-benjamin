import { Component, signal } from '@angular/core';
import { ChatbotForm } from './components/chatbot-form/chatbot-form';
import { FileUpload } from './components/file-upload/file-upload';
import { ChatSimulator } from './components/chat-simulator/chat-simulator';

@Component({
  selector: 'app-root',
  imports: [ChatbotForm, FileUpload, ChatSimulator],
  template: `
  <div class="page">
    <div class="page-header">
      <h1>Chatbot Studio</h1>
      <h2 class="subtitle">Create and customize your own AI-powered chatbot</h2>
    </div>

    <app-chatbot-form></app-chatbot-form>
    <app-file-upload></app-file-upload>
    <app-chat-simulator></app-chat-simulator>
  </div>
`,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('chatbot-angular-app');
}
