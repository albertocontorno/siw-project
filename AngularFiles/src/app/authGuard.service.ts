import {RouterStateSnapshot, ActivatedRouteSnapshot,  CanActivate} from '@angular/router';
import { Observable } from "rxjs/Observable";
import { Injectable } from '@angular/core';
import { UtenteService } from './utente.service';


@Injectable()
export class AuthGuard implements CanActivate{

  constructor(private utenteService: UtenteService){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    return this.utenteService.isLoggedIn();
  }



}
