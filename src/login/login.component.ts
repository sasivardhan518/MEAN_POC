import { Component, OnInit } from '@angular/core';
import { LoginService } from './shared/login.service';
import { IUserCredentials } from '../Models/IUser';
import { IResponse } from '../ClientModels/IResponse';
import { StatusEnum } from '../ClientEnums/StatusEnum';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { CustomModalComponent } from '../customModal/customModal.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  bsModalRef: BsModalRef;
  loginTitle: string;
  user: IUserCredentials = { userId: 'test', password: 'ssssss' };
  constructor(private modalService: BsModalService, private loginService: LoginService) {
    this.loginTitle = 'Login';
  }

  ngOnInit() {

  }

  login() {
    const initialState = {
      list: [
        'Open a modal with component',
        'Pass your data',
        'Do something else',
        '...'
      ],
      title: 'Modal with component'
    };
    this.bsModalRef = this.modalService.show(CustomModalComponent, {initialState});
    this.bsModalRef.content.closeBtnName = 'Close';
    //this.loginService.login(this.user).subscribe(data => this.validateLogin(data));
  }

  validateLogin(response: IResponse) {
    if (response.Status === StatusEnum.failed) {
      alert(response.Error);
    } else {
      alert('login success for: ' + response.Data.emailId);
    }
  }
}
