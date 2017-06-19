import { Opera } from './opera.model';
import { Subject } from 'rxjs/Subject';
import {Response, Http} from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/rx';

@Injectable()
export class OpereService{

  opere: Opera[] = [];
  opereChanged = new Subject<Opera[]>();

  constructor(private http: Http){}

  getOpere(){
    return this.http.get('https://siw-project.herokuapp.com/OperaController?comando=getOpere')
    .map(
      (response : Response) => {
        const opere: Opera[] = JSON.parse(response.text());
        return opere;
      }
    )
    .subscribe(
      (opere: Opera[]) =>{
        this.opere = opere;
        this.opereChanged.next(this.opere);
      }
    )
  }

  getOperaIndex(index: number){
    return this.opere[index];
  }

  getOperaId(id : number){
    let opera: Opera;
    for (let i=0; i<this.opere.length; i++) {
      if (this.opere[i].id == id) {
        opera = this.opere[i];
      }
    }
    return opera;
  }

  setOpere(opere: Opera[]){
    this.opere = opere;
  }

  addOpera(opera: Opera){
    this.opere.push(opera);
  }

  deleteOpera(id: number){
    this.http.get('https://siw-project.herokuapp.com/OperaController?comando=deleteOpera&id='+id).subscribe(
      (response: Response) => {
        this.getOpere();
      }
    );
  }

  getOpereofAutore(id:number){
    let opereOfAutore: Opera[] = [];

    for (let i=0; i<this.opere.length; i++) {
      if (+this.opere[i].artistaId.trim() == id) {
        opereOfAutore.push(this.opere[i]);
      }
    }

    return opereOfAutore;
  }
}
