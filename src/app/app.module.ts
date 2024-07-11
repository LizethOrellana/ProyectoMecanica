import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModel } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { PagEjemplosComponent } from './pag-ejemplos/pag-ejemplos.component';
import { PagPreguntasComponent } from './pag-preguntas/pag-preguntas.component';
import { PagVideosComponent } from './pag-videos/pag-videos.component';
import { FooterComponent } from './footer/footer.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    PagEjemplosComponent,
    PagPreguntasComponent,
    PagVideosComponent,
    FooterComponent,
  ],
  imports: [
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
    ]),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
