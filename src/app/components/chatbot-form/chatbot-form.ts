import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule} from '@angular/forms';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-chatbot-form',
  imports: [ReactiveFormsModule, MatSnackBarModule],
  templateUrl: './chatbot-form.html',
  styleUrl: './chatbot-form.css',
})

export class ChatbotForm implements OnInit {
  chatbotForm!: FormGroup;

  constructor(private fb: FormBuilder, private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.chatbotForm = this.fb.group({
      name: ['', Validators.required],
      personality: [0.5],
      description: ['']
    });

    this.loadFromLocalStorage();
  }

  onSubmit() {
    if (this.chatbotForm.invalid) return;

    const formData = this.chatbotForm.value;
    localStorage.setItem('chatbotConfig', JSON.stringify(formData));

    this.snackBar.open('Chatbot successfully saved!', 'Close', {
      duration: 2500,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: ['success-snackbar']
    });
  }

  loadFromLocalStorage() {
    const data = localStorage.getItem('chatbotConfig');
    if (data) {
      this.chatbotForm.patchValue(JSON.parse(data));
    }
  }
}
