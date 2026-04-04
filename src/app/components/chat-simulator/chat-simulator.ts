import { ChangeDetectorRef, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Message {
  text: string;
  sender: 'user' | 'bot';
}

@Component({
  selector: 'app-chat-simulator',
  imports: [FormsModule],
  templateUrl: './chat-simulator.html',
  styleUrl: './chat-simulator.css',
})

export class ChatSimulator {
  messages: Message[] = [];
  userInput: string = '';

  constructor(private cdr: ChangeDetectorRef) {}

  sendMessage() {
    if (!this.userInput.trim()) return;

    this.messages = [
      ...this.messages,
      { text: this.userInput, sender: 'user' }
    ];

    const userMsg = this.userInput;
    this.userInput = '';

    setTimeout(() => {
      this.messages.push({
        text: this.generateBotReply(userMsg),
        sender: 'bot'
      });

      this.cdr.detectChanges();
    }, 1000);
  }

  generateBotReply(msg: string): string {
    const responses = [
      "Interesting",
      "Tell me more!",
      "I understand.",
      "That makes sense.",
      "Can you elaborate?"
    ];

    return responses[Math.floor(Math.random() * responses.length)];
  }
}
