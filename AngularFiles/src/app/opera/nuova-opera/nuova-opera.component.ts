import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Http, Response } from '@angular/http';
import { AutoriService } from '../../autore/autori.service';
import { Autore } from '../../autore/autore.model';
import { OpereService } from '../opere.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-nuova-opera',
  templateUrl: './nuova-opera.component.html',
  styleUrls: ['./nuova-opera.component.css']
})
export class NuovaOperaComponent implements OnInit {
  subscription: Subscription;

  autori: Autore[];

  constructor(private http: Http,private router: Router, private autoriService: AutoriService,private opereService: OpereService) {}

  ngOnInit() {
    this.autori = this.autoriService.getAutoriArr();
  }

  onSubmitOpera(f : NgForm){
    console.log(f);
    const titolo = f.value.titolo;
    const descrizione = f.value.descrizione;
    const anno = f.value.anno;
    const tecnica = f.value.tecnica;
    const altezza = f.value.altezza;
    const larghezza = f.value.larghezza;
    const imgPath = f.value.imgPath;
    const id = f.value.id;

    const url:string =
    'https://siw-project.herokuapp.com/OperaController?comando=creaOpera&titolo='+titolo
    +'&descrizione='+descrizione
    +'&anno='+anno
    +'&tecnica='+tecnica
    +'&altezza='+altezza
    +'&larghezza='+larghezza
    +'&imgPath='+imgPath
    +'&id='+id;

    this.http.get(url).subscribe(
      (response : Response) => {
        let id = response.text();
        this.opereService.getOpere();
        this.subscription=this.opereService.opereChanged.subscribe( ()=>{this.router.navigate(['/opera', id]);});
      })
  }

    ngOnDestroy(){
    if(this.subscription != null){
      this.subscription.unsubscribe();
    }
  }

}
