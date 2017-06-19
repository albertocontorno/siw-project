import { Http,  Response} from '@angular/http';

import { Component, OnInit, ElementRef, Injectable } from '@angular/core';
import * as $ from 'jquery';
import { NgForm } from '@angular/forms';
import { UtenteService } from '../utente.service';
import { Router } from '@angular/router';
import { AutoriService } from '../autore/autori.service';
import { OpereService } from '../opera/opere.service';

@Component({
  selector: 'app-home-login',
  templateUrl: './home-login.component.html',
  styleUrls: ['./home-login.component.css']
})

@Injectable()
export class HomeLoginComponent implements OnInit {

    error: string;

    constructor(private http: Http, private utenteService: UtenteService, private router: Router, private autoriService: AutoriService, private opereService: OpereService) {

    }


  ngOnInit() {
    let margin = (window.innerHeight-$("#jumbo").outerHeight())/2;
     $("#jumbo").css("marginTop", margin);

    window.onresize = resize;

    function resize(){
      let margin = (window.innerHeight-$("#jumbo").outerHeight())/2;
      $("#jumbo").css("marginTop", margin);
    }
    $('#navbarTop').addClass('invisible');
    if(this.utenteService.isLoggedIn()){
      this.navigateAutori();
    }
  }

  onSubmitLogin(f : NgForm){
    const email = f.value.email;
    const password = f.value.password;
    const url:string = 'https://siw-project.herokuapp.com/UtenteController?comando=login&email='+email+'&password='+password;
    this.http.get(url).subscribe(
      (response : Response) => {
        if((response.text().trim() === 'utente') || ((response.text().trim()) === 'amministratore') ){
          this.utenteService.setRuoloUtente(response.text());
          this.error = '';
          this.autoriService.getAutori();
          this.opereService.getOpere();
          this.navigateAutori();
        } else {
          this.error = 'Utente non trovato. Password o Email errati';
          $('#error').toggleClass('hidden');
        }

      }
    );

  }

  navigateAutori(){
    $('#navbarTop').removeClass('invisible');
    this.router.navigate(['/elencoArtisti']);
  }
}
