import { Autore } from './autore.model';

export class AutoriService{

  autori: Autore[] = [
    {nome:'Leonardo', cognome:'da Vinci', dataNascita: new Date('15/5/1452'), cittàNascita:'Anchiano', dataMorte: new Date('2/5/1519'), cittàMorte:'Amboise', id: 1, descrizione:'Ha dipinto la Gioconda. Bravo.' },
    {nome:'Leonardo', cognome:'da Vinci', dataNascita: new Date('15/5/1452'), cittàNascita:'Anchiano', dataMorte: new Date('2/5/1519'), cittàMorte:'Amboise', id: 1, descrizione:'Ha dipinto la Gioconda. Bravo.' },
    {nome:'Leonardo', cognome:'da Vinci', dataNascita: new Date('15/5/1452'), cittàNascita:'Anchiano', dataMorte: new Date('2/5/1519'), cittàMorte:'Amboise', id: 1, descrizione:'Ha dipinto la Gioconda. Bravo.' },
    {nome:'Leonardo', cognome:'da Vinci', dataNascita: new Date('15/5/1452'), cittàNascita:'Anchiano', dataMorte: new Date('2/5/1519'), cittàMorte:'Amboise', id: 1, descrizione:'Ha dipinto la Gioconda. Bravo.' },
  ];

  getAutori(){
    return this.autori;
  }

  getAutoreIndex(index: number){
    return this.autori[index];
  }

  getAutoreId(id : number){
    let autore: Autore;

    for (let autoreEl of this.autori) {
      if (autoreEl.id === id) {
        autore = autoreEl;
      }
    }

    return autore;
  }

  setAutori(autori: Autore[]){
    this.autori = autori;
  }

  setAutore(autore: Autore){
    this.autori.push(autore);
  }

}
