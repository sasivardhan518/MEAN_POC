import { Component, OnInit } from '@angular/core';
import { LoginService } from './shared/login.service';
import { IUserCredentials } from '../Models/IUser';
import { IResponse } from '../ClientModels/IResponse';
import { StatusEnum } from '../ClientEnums/StatusEnum';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { CustomModalComponent } from '../customModal/customModal.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  bsModalRef: BsModalRef;
  loginTitle: string;
  user: IUserCredentials = { userId: 'test', password: 'ssssss' };
  constructor(private modalService: BsModalService, private loginService: LoginService, private router: Router) {
    this.loginTitle = 'Login';
  }

  ngOnInit() {

  }

  login() {
    if(!this.user.userId){
      this.showModal("Please provide username","Login Error");
    }
    else if(!this.user.password){
      this.showModal("Please provide password","Login Error");
    }
    else{
      this.loginService.login(this.user).subscribe(data => this.validateLogin(data));
    }
  }

  validateLogin(response: IResponse) {
    if (response.Status === StatusEnum.failed) {
      this.showModal(response.Error,"Login Error");
    } else {
      this.router.navigate(['/home']);
      //alert('login success for: \n' + response.Data.emailId);
    }
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
