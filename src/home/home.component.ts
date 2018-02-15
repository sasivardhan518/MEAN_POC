import { Component, OnInit } from '@angular/core';
import { AuthService } from '../app/shared/auth.service';
import { IUser } from '../Models/IUser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currentUser : IUser;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.currentUser = this.authService.getCurrentUser();
    // if(!this.currentUser){
    //   this.router.navigate(['/index']);
    // }
  }

  /* Set the width of the side navigation to 250px */
openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

}
