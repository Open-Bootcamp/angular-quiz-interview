import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './pages/menu/menu.component';
import { StatementsComponent } from './pages/statements/statements.component';

const routes: Routes = [
  { path: 'menu',
    pathMatch: 'full',
    component: MenuComponent
  },
  { path: 'interview-trainer', pathMatch: 'full', component: StatementsComponent },
  { path: '', pathMatch: 'full', redirectTo: '/menu' },
  { path: '**', pathMatch: 'full', redirectTo: '/menu' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
