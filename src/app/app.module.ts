import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './pages/menu/menu.component';
import { StatementsComponent } from './pages/statements/statements.component';
import { RegisterModalComponent } from './pages/register-modal/register-modal.component';
import { ModalComponent } from './pages/register-modal/components/modal/modal.component';
import { SidebarComponent } from './pages/statements/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    MenuComponent,
    StatementsComponent,
    RegisterModalComponent,
    ModalComponent,
    SidebarComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
