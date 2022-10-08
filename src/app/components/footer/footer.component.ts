import { Component, OnInit } from '@angular/core';
import * as globals from '../../globals';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  socials = globals.SOCIAL_MEDIAS;
  obLink = globals.OB_LINKS.footerUrl;

  constructor() { }

  ngOnInit(): void {
  }

}
