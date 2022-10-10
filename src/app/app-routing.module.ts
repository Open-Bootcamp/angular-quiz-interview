import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './pages/menu/menu.component';
import { RegisterModalComponent } from './pages/register-modal/register-modal.component';
import { StatementsComponent } from './pages/statements/statements.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/register' },
  { path: 'menu', pathMatch: 'full', component: MenuComponent },
  { path: 'register', pathMatch: 'full', component: RegisterModalComponent },
  { path: 'interview-trainer', pathMatch: 'full', component: StatementsComponent },
  { path: '**', pathMatch: 'full', redirectTo: '/menu' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
