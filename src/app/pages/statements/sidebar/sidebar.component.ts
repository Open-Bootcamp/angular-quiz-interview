import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  @Input() show = false;

  @Output() newCloseEvent = new EventEmitter<boolean>();

  onClose(): void {
    this.newCloseEvent.emit(!this.show);
  }

  constructor() {}

  ngOnInit(): void {}

  // close

  /*  toggle(): void {
    this.show = !this.show;
  } */
}
