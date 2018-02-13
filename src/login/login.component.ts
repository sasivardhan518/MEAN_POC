import { Component, OnInit } from '@angular/core';
import { LoginService } from './shared/login.service';
import { IUserCredentials } from '../Models/IUser';
import { IResponse } from '../ClientModels/IResponse';
import { StatusEnum } from '../ClientEnums/StatusEnum';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginTitle: string;
  user: IUserCredentials = { userId: 'test', password: 'ssssss' };
  constructor(private loginService: LoginService) {
    this.loginTitle = 'Login';
  }

  ngOnInit() {

  }

  login() {
    this.loginService.login(this.user).subscribe(data => this.validateLogin(data));
  }

  validateLogin(response: IResponse) {
    if (response.Status === StatusEnum.failed) {
      alert(response.Error);
    } else {
      alert('login success for: ' + response.Data.emailId);
    }
  }
}
