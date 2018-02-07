import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registrationTitle: string;

  constructor() {
    this.registrationTitle = 'Registration';
   }

  ngOnInit() {
  }

}
