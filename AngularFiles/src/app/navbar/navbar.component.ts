import { Component, OnInit } from '@angular/core';
import { UtenteService } from '../utente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private utenteService: UtenteService, private router: Router) { }

  ngOnInit() {
  }

  onLogout(){
    this.utenteService.logout();
    this.router.navigate(['/login']);
  }

}
