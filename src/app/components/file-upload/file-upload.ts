import { Component, OnInit } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-file-upload',
  imports: [MatIcon],
  templateUrl: './file-upload.html',
  styleUrl: './file-upload.css',
})
export class FileUpload implements OnInit{
  files: string[] = [];

  ngOnInit(): void {
    const saved = localStorage.getItem('uploadedFiles');
    if (saved) {
      this.files = JSON.parse(saved);
    }
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;

    if (!input.files) return;

    const selectedFiles: FileList = input.files;

    for (let i = 0; i < selectedFiles.length; i++) {
      const file = selectedFiles[i];
      if (file.type === 'text/plain' && !this.files.includes(file.name)) {
        this.files.push(file.name);
      }
    }

    this.saveToLocalStorage();
    input.value = '';
  }

  removeFile(index: number) {
    this.files.splice(index, 1);
    this.saveToLocalStorage();
  }

  saveToLocalStorage() {
    localStorage.setItem('uploadedFiles', JSON.stringify(this.files));
  }
}
