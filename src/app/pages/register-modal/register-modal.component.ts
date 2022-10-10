import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-modal',
  templateUrl: './register-modal.component.html',
  styleUrls: ['./register-modal.component.css'],
})
export class RegisterModalComponent implements OnInit {
  constructor(private router: Router) {}

  goToMenuPage(): void {
    this.router.navigate(['/menu']);
  }

  ngOnInit(): void {}
}
