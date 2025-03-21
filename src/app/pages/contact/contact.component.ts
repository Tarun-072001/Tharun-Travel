import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [
    FormsModule,
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {


  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  saveFormData() {
    localStorage.setItem('contactFormData', JSON.stringify(this.formData));
    alert('Form data saved to Local Storage!');
    this.formData = { name: '', email: '', subject: '', message: '' };
  }
}
