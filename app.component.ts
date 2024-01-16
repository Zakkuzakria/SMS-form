import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  drawDate: any;
  message: any;
  @ViewChild('smsForm', { static: false }) smsForm!: NgForm;

  formData: any = {};

  constructor() { }

  onSubmit() {
    if (this.smsForm && this.smsForm.valid) {
      alert(this.message);
      alert(this.drawDate);
    } else {
      alert('Please fill in all required fields.');
    }
  }


  clearForm() {
    this.formData = {};
    if (this.smsForm) {
      this.smsForm.resetForm();
    }
  }
}


