import { ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
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
  isBotTyping: boolean = false;

  constructor(private cdr: ChangeDetectorRef) {}
  @ViewChild('chatWindow') chatWindow!: ElementRef;

  sendMessage() {
    if (!this.userInput.trim()) return;

    this.messages = [
      ...this.messages,
      { text: this.userInput, sender: 'user' }
    ];

    this.cdr.detectChanges();
    this.scrollToBottom();

    const userMsg = this.userInput;
    this.userInput = '';

    this.isBotTyping = true;

    setTimeout(() => {
      this.isBotTyping = false;

      this.messages.push({
        text: this.generateBotReply(userMsg),
        sender: 'bot'
      });

      this.cdr.detectChanges();
      this.scrollToBottom();
    }, 1000);
  }

  scrollToBottom() {
    try {
      this.chatWindow.nativeElement.scrollTop =
        this.chatWindow.nativeElement.scrollHeight;
    } catch (err) {}
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
