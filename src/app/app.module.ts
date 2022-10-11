import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './pages/menu/menu.component';
import { StatementsComponent } from './pages/statements/statements.component';
import { RegisterModalComponent } from './pages/register-modal/register-modal.component';
import { SidebarComponent } from './pages/statements/sidebar/sidebar.component';
import { HighlightService } from './services/highlight.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    MenuComponent,
    StatementsComponent,
    RegisterModalComponent,
    SidebarComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [HighlightService],
  bootstrap: [AppComponent],
})
export class AppModule {}
