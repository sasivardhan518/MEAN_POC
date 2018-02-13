import { Component, OnInit } from '@angular/core';
import { IUser } from '../Models/IUser';


@Component({
  selector: 'app-register',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  registrationTitle: string;
  newUser : IUser ={emailId :"",firstName:"",lastName:"",userId:"", password:""};
  constructor() {
    this.registrationTitle = 'Registration';
   }

 

  register(){
    console.log(this.newUser);
  }

}
