import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { IName } from 'src/app/interface/router.interface';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  technologies: any;
  haveTechnologies = false;
  dataRouter!: IName

  constructor(
    private router: Router,
    private apiService: ApiService,
  ) { 
    const state = this.router.getCurrentNavigation()?.extras.state;
    this.dataRouter = state as IName;
  }

  ngOnInit(): void {
    this.getTechnologies();
  }

  getTechnologies = () => {
    this.haveTechnologies = true;
    this.apiService.getTechnologies().subscribe((response: any) => {
      this.technologies = response.data;
      this.haveTechnologies = false;
    });
  }

  toInterviewTrainer(tech: any) {
    localStorage.setItem('idTechnology', JSON.stringify(tech._id));
    localStorage.setItem('name', JSON.stringify(this.dataRouter.name));
    const data = [
      this.dataRouter.name,
      tech._id
    ]
    const navigationExtras: NavigationExtras = {
      state: data
    };
    this.router.navigate(['/interview-trainer'], navigationExtras);
  }

}
