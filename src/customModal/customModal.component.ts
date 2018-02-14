import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-customModal',
  templateUrl: './customModal.component.html',
  styleUrls: ['./customModal.component.css']
})
export class CustomModalComponent implements OnInit {
  title: string;
  closeBtnName: string;
  errorMessage: string = "";

  constructor(public bsModalRef: BsModalRef) {}

  ngOnInit() {

  }
}
