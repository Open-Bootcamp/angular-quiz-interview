import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './pages/menu/menu.component';
import { StatementsComponent } from './pages/statements/statements.component';
import { HighlightService } from './services/highlight.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    MenuComponent,
    StatementsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [HighlightService],
  bootstrap: [AppComponent]
})
export class AppModule { }
