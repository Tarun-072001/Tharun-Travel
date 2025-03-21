import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CommonModule,
    FormsModule,
    RouterLink
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  showPopup = false;
  currentSlide = 0;

  ngOnInit() {
    setInterval(() => {
      this.currentSlide = (this.currentSlide + 1) % 4;
    }, 10000); // 10 seconds interval
  }

  openPopup() {
    this.showPopup = true;
  }

  closePopup() {
    this.showPopup = false;
  }


  user = {
    fullName: '',
    email: '',
    phone: ''
  };

  registerUser() {
    localStorage.setItem('registeredUser', JSON.stringify(this.user));
    alert('User Registered Successfully!');
    this.closePopup();
  }

}
