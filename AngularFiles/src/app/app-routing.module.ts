import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeLoginComponent } from './home-login/home-login.component';
import { NuovoAutoreComponent } from './autore/nuovo-autore/nuovo-autore.component';
import { OperaComponent } from './opera/opera.component';
import { ElencoAutoriComponent } from './autore/elenco-autori/elenco-autori.component';
import { ElencoOpereComponent } from './opera/elenco-opere/elenco-opere.component';
import { HomeSignupComponent } from './home-signup/home-signup.component';
import { AuthGuard } from './authGuard.service';
import { NuovaOperaComponent } from './opera/nuova-opera/nuova-opera.component';
import { AutoreComponent } from './autore/autore.component';

const appRoutes: Routes = [
  //{path:'' , redirectTo: '/login', pathMatch:'full' },
  { path: '', redirectTo: '/login', pathMatch:'full'},
  { path: 'login', component: HomeLoginComponent},
  { path: 'signup', component: HomeSignupComponent},
  { path: 'nuovoAutore', component: NuovoAutoreComponent, canActivate:[AuthGuard]},
  { path: 'nuovaOpera', component: NuovaOperaComponent, canActivate:[AuthGuard]},
  { path: 'opera/:id', component: OperaComponent, canActivate:[AuthGuard]},
  { path: 'autore/:id', component: AutoreComponent, canActivate:[AuthGuard]},
  { path: 'elencoArtisti', component: ElencoAutoriComponent, canActivate:[AuthGuard]},
  { path: 'elencoOpere', component: ElencoOpereComponent, canActivate:[AuthGuard]},
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
