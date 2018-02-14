import { Component, OnInit } from '@angular/core';
import { IUser } from '../Models/IUser';
import { RegistrationService } from './shared/registration.service';
import {} from 'rxjs';
import { CustomModalComponent } from '../customModal/customModal.component';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { IResponse } from '../ClientModels/IResponse';
import { StatusEnum } from '../ClientEnums/StatusEnum';

@Component({
  selector: 'app-register',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  bsModalRef: BsModalRef;
  registrationTitle: string;
  confirmPassword: string;
  newUser: IUser = {emailId : '', firstName: '', lastName: '', userId: '', password: ''};
  constructor(private registrationService : RegistrationService, private modalService: BsModalService) {
    this.registrationTitle = 'Registration';
   }



  register() {
    if(this.validateFields())
    this.registrationService.addUser(this.newUser).subscribe(data => this.registrationCallBack(data));
  }

  registrationCallBack(response: IResponse) {
    if(response.Status == StatusEnum.failed){
      this.showModal(response.Error, "Registration Error");
    }else{
      this.showModal("Registered Successfully", "Registration Succes");
    }
  }

  validateFields() : boolean {
      var isValid = false;
      if(!this.newUser.emailId){
          this.showModal("Please provide email id.", "Registration error");
      }else if(!this.newUser.firstName){
        this.showModal("Please provide first name.", "Registration error");
      }else if(!this.newUser.lastName){
        this.showModal("Please provide last name.", "Registration error");
      }else if(!this.newUser.userId){
        this.showModal("Please provide user id.", "Registration error");
      }else if(!this.newUser.password){
        this.showModal("Please provide password.", "Registration error");
      }else if(!this.confirmPassword){
        this.showModal("Please provide confirm password.", "Registration error");
      }else if(this.confirmPassword != this.newUser.password){
        this.showModal("passwords don't match.", "Registration error");
      }else{
        return true;
      }
      return isValid;
  }

  showModal(errorMessage, title){
    const initialState = {
      errorMessage: errorMessage,
      title: 'Login Error'
    };
    this.bsModalRef = this.modalService.show(CustomModalComponent, {initialState});
    this.bsModalRef.content.closeBtnName = 'Close';
  }
}
