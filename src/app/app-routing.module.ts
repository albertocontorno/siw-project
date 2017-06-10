import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeLoginComponent } from './home-login/home-login.component';
import { NuovoAutoreComponent } from './autore/nuovo-autore/nuovo-autore.component';
import { OperaComponent } from './opera/opera.component';
import { ElencoAutoriComponent } from './autore/elenco-autori/elenco-autori.component';
import { ElencoOpereComponent } from './opera/elenco-opere/elenco-opere.component';

const appRoutes: Routes = [
  //{path:'' , redirectTo: '/login', pathMatch:'full' },
  { path: 'login', component: HomeLoginComponent},
  { path: 'signup', component: HomeLoginComponent},
  { path: 'nuovoAutore', component: NuovoAutoreComponent},
  { path: 'opera', component: OperaComponent},
  { path: 'elencoArtisti', component: ElencoAutoriComponent},
  { path: 'elencoOpere', component: ElencoOpereComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
