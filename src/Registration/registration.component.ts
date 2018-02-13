import { Component, OnInit } from '@angular/core';
import { IUser } from '../Models/IUser';
import { RegistrationService } from './shared/registration.service';
import {} from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  registrationTitle: string;
  newUser : IUser ={emailId :"",firstName:"",lastName:"",userId:"", password:""};
  constructor(private registrationService : RegistrationService) {
    this.registrationTitle = 'Registration';
   }

 

  register(){
    this.registrationService.getUsers(this.newUser).subscribe(data => console.log(data));
  }

}
