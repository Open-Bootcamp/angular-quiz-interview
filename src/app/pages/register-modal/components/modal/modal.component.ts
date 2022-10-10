import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  // redirecto to menu component
  constructor(private router: Router) {}

  goToMenuPage() {
    this.router.navigate(['/menu']);
  }

  ngOnInit(): void {}
}
