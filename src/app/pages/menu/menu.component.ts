import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

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
    localStorage.clear();
  }

  getTechnologies = () => {
    this.apiService.getTechnologies().subscribe((response: any) => {
      this.technologies = response.data;
    });
  }

  toInterviewTrainer(tech: any) {
    localStorage.setItem('idTechnology', JSON.stringify(tech._id));
    const navigationExtras: NavigationExtras = {
      state: tech._id
    };
    this.router.navigate(['/interview-trainer'], navigationExtras);
  }

}
