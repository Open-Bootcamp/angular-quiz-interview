import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-register-modal',
  templateUrl: './register-modal.component.html',
  styleUrls: ['./register-modal.component.css'],
})
export class RegisterModalComponent implements OnInit {
  formGoToMenu = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
  });

  constructor(private router: Router) { }

  goToMenuPage(): void {
    const navigationExtras: NavigationExtras = {
      state: {
        name: this.formGoToMenu.value.name,
      },
    };
    console.log(this.formGoToMenu.value.name);
    this.router.navigate(['/menu'], navigationExtras);
  }

  ngOnInit(): void {
    localStorage.clear();
  }
}
