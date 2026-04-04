import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-file-upload',
  imports: [],
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

  onFileSelected(event: any) {
    const selectedFiles: FileList = event.target.files;

    for (let i = 0; i < selectedFiles.length; i++) {
      const file = selectedFiles[i];
      if (file.type === 'text/plain' && !this.files.includes(file.name)) {
        this.files.push(file.name);
      }
    }

    this.saveToLocalStorage();
    event.target.value = '';
  }

  removeFile(index: number) {
    this.files.splice(index, 1);
    this.saveToLocalStorage();
  }

  saveToLocalStorage() {
    localStorage.setItem('uploadedFiles', JSON.stringify(this.files));
  }
}
