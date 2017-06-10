import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeLoginComponent } from './home-login/home-login.component';
import { AutoreComponent } from './autore/autore.component';
import { NuovoAutoreComponent } from './autore/nuovo-autore/nuovo-autore.component';
import { OperaComponent } from './opera/opera.component';
import { ElencoAutoriComponent } from './autore/elenco-autori/elenco-autori.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ElencoOpereComponent } from './opera/elenco-opere/elenco-opere.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeLoginComponent,
    AutoreComponent,
    NuovoAutoreComponent,
    OperaComponent,
    ElencoAutoriComponent,
    NavbarComponent,
    ElencoOpereComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
