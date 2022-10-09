import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import * as globals from '../../globals';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  technologies: any;

  constructor(
    private router: Router,
    private apiService: ApiService,
  ) { }

  ngOnInit(): void {
    this.getTechnologies();
  }

  getTechnologies = () => {
    this.apiService.getTechnologies().subscribe((response: any) => {
      this.technologies = response.data;
    });
  }


  toInterviewTrainer(tech: any) {
    console.log(tech);
    this.router.navigate(['/interview-trainer']);
  }

}
