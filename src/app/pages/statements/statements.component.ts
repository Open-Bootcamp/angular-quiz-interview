import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-statements',
  templateUrl: './statements.component.html',
  styleUrls: ['./statements.component.css'],
})
export class StatementsComponent implements OnInit {
  show = true;

  constructor() {}

  ngOnInit(): void {}

  toggle() {
    this.show = !this.show;
  }
}
