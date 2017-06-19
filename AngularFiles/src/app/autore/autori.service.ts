import { Autore } from './autore.model';
import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/rx';
import { Subject } from "rxjs/Subject";

@Injectable()
export class AutoriService{

  autori: Autore[] = [];
  autoriChanged = new Subject<Autore[]>();

  constructor(private http: Http){}

  getAutori(){
    return this.http.get('https://siw-project.herokuapp.com/ArtistaController?comando=getArtisti')
    .map(
      (response : Response) => {
        const artisti: Autore[] = JSON.parse(response.text());
        return artisti;
      }
    )
    .subscribe(
      (artisti: Autore[]) =>{
        this.autori = artisti;
        this.autoriChanged.next(this.autori);
      }
    )
  }

  getAutoriArr(){
    return this.autori;
  }

  getAutoreIndex(index: number){
    return this.autori[index];
  }

  getAutoreId(id : number){
    let autore: Autore;
    for (let i=0; i<this.autori.length; i++) {
      if (this.autori[i].id == id) {
        autore = this.autori[i];
      }
    }

    return autore;
  }

  setAutori(autori: Autore[]){
    this.autori = autori;
  }

  addAutore(autore: Autore){
    this.autori.push(autore);
  }

  deleteAutore(id: number){
    this.http.get('https://siw-project.herokuapp.com/ArtistaController?comando=deleteArtista&id='+id).subscribe(
      (response: Response) => {
        this.getAutori();
      }
    );
  }

}
