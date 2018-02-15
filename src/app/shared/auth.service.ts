import { Injectable } from '@angular/core';
import { User } from '../../Models/User';

@Injectable()
export class AuthService {
currentUser : User;

constructor() {
}

setCurrentUser(user: User){
  this.currentUser = new User();
  this.currentUser.userId = user.userId;
  this.currentUser.firstName = user.firstName;
  this.currentUser.lastName = user.lastName;
  this.currentUser.emailId = user.emailId;
}

getCurrentUser(){
  return this.currentUser;
}

}
