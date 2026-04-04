import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChatbotForm } from './components/chatbot-form/chatbot-form';

@Component({
  selector: 'app-root',
  imports: [ChatbotForm],
  template: `<h1>Chatbot Builder</h1>
    <app-chatbot-form></app-chatbot-form>
  `,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('chatbot-angular-app');
}
