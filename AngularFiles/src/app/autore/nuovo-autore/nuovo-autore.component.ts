import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';
import { AutoriService } from '../autori.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-nuovo-autore',
  templateUrl: './nuovo-autore.component.html',
  styleUrls: ['./nuovo-autore.component.css']
})
export class NuovoAutoreComponent implements OnInit, OnDestroy {

  subscription : Subscription

  constructor(private http: Http, private router: Router, private autoriService: AutoriService) {}

  ngOnInit() {
  }

  onSubmitArtista(f : NgForm){
    console.log(f); console.log(f.controls.nome.valid);
    const nome = f.value.nome;
    const cognome = f.value.cognome;
    const dataNascita = f.value.dataNascita;
    const dataMorte = f.value.dataMorte;
    const luogoNascita = f.value.luogoNascita;
    const descrizione = f.value.descrizione;
    const imgPath = f.value.imgPath;

    const url:string =
    'http://localhost:8080/galleriaSIW/ArtistaController?comando=creaArtista&nome='+nome
    +'&cognome='+cognome
    +'&dataNascita='+dataNascita
    +'&dataMorte='+dataMorte
    +'&luogoNascita='+luogoNascita
    +'&descrizione='+descrizione
    +'&imgPath='+imgPath;

    this.http.get(url).subscribe(
      (response : Response) => {
        let id = response.text();
        this.autoriService.getAutori();
        this.subscription=this.autoriService.autoriChanged.subscribe( ()=>{this.router.navigate(['/autore', id]);});
      })
  }

  ngOnDestroy(){
    if(this.subscription != null){
      this.subscription.unsubscribe();
    }
  }

}
