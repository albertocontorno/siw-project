import { Opera } from './opera.model';

export class OpereService{

  opere: Opera[] = [
    {titolo:'A Primavera', data: new Date('15/5/1452'), id: 1, descrizione:'Un po di gente che si diverte.', autore:"Sandro Botticelli", tecnica:"olio su tela" },
    {titolo:'A Gioconda', data: new Date('15/5/1452'), id: 1, descrizione:'Una che sorride.Male.', autore:"Leonardo da Vinci", tecnica:"olio su tela" },
    {titolo:'Ca Primavera', data: new Date('15/5/1452'), id: 1, descrizione:'Un po di gente che si diverte.', autore:"Sandro Botticelli", tecnica:"olio su tela" },
    {titolo:'Ca Gioconda', data: new Date('15/5/1452'), id: 1, descrizione:'Una che sorride.Male.', autore:"Leonardo da Vinci", tecnica:"olio su tela" },
    {titolo:'La Primavera', data: new Date('15/5/1452'), id: 1, descrizione:'Un po di gente che si diverte.', autore:"Sandro Botticelli", tecnica:"olio su tela" },
    {titolo:'Gioconda', data: new Date('15/5/1452'), id: 1, descrizione:'Una che sorride.Male.', autore:"Leonardo da Vinci", tecnica:"olio su tela" },
    {titolo:'Primavera', data: new Date('15/5/1452'), id: 1, descrizione:'Un po di gente che si diverte.', autore:"Sandro Botticelli", tecnica:"olio su tela" },
    {titolo:'Piocondaaaa', data: new Date('15/5/1452'), id: 1, descrizione:'Una che sorride.Male.', autore:"Leonardo da Vinci", tecnica:"olio su tela" },
    {titolo:'Grimaveraaa', data: new Date('15/5/1452'), id: 1, descrizione:'Un po di gente che si diverte.', autore:"Sandro Botticelli", tecnica:"olio su tela" },
    {titolo:'Bioconda', data: new Date('15/5/1452'), id: 1, descrizione:'Una che sorride.Male.', autore:"Leonardo da Vinci", tecnica:"olio su tela" },
    {titolo:'Brimavera', data: new Date('15/5/1452'), id: 1, descrizione:'Un po di gente che si diverte.', autore:"Sandro Botticelli", tecnica:"olio su tela" },
  ];

  getOpere(){
    return this.opere;
  }

  getOperaIndex(index: number){
    return this.opere[index];
  }

  getOperaId(id : number){
    let opera: Opera;

    for (let operaEl of this.opere) {
      if (operaEl.id === id) {
        opera = operaEl;
      }
    }

    return opera;
  }

  setOpere(opere: Opera[]){
    this.opere = opere;
  }

  setAutore(opera: Opera){
    this.opere.push(opera);
  }

}
