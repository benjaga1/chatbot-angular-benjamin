import { Component, signal } from '@angular/core';
import { ChatbotForm } from './components/chatbot-form/chatbot-form';
import { FileUpload } from './components/file-upload/file-upload';

@Component({
  selector: 'app-root',
  imports: [ChatbotForm, FileUpload],
  template: `<h1>Chatbot Builder</h1>
    <app-chatbot-form></app-chatbot-form>
    <app-file-upload></app-file-upload>
  `,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('chatbot-angular-app');
}
