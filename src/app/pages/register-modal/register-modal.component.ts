import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-modal',
  templateUrl: './register-modal.component.html',
  styleUrls: ['./register-modal.component.css'],
})
export class RegisterModalComponent implements OnInit {
  show: boolean = true;

  constructor() {}

  ngOnInit(): void {}

  close() {
    this.show = false;
  }
}
