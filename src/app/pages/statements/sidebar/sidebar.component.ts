import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { IName } from 'src/app/interface/router.interface';
import * as globals from '../../../globals';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  @Input() name!: IName;
  @Input() show = false;
  @Input() lifes = [...new Array(globals.ASIDE_DATA.lifes)].map((_, i) => i);
  @Input() points = globals.ASIDE_DATA.points;

  constructor(private router: Router) {}

  @Output() newCloseEvent = new EventEmitter<boolean>();

  onClose(): void {
    this.newCloseEvent.emit(!this.show);
  }

  goToMenuPage() {
    this.router.navigate(['/']);
  }

  ngOnInit(): void {}
}
