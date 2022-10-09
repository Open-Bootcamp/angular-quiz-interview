import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as globals from '../../globals';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  technologies = globals.TECHNOLOGIES;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  toInterviewTrainer() {
    this.router.navigate(['/interview-trainer']);
  }

}
