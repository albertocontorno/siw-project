

export class UtenteService{
  ruoloUtente: string = "";
  loggedIn: boolean = false;

  setRuoloUtente(ruolo: string){
    this.ruoloUtente = ruolo;
    this.loggedIn = true;
  }

  getRuoloUtente(){
    return this.ruoloUtente;
  }

  isLoggedIn(){
    return this.loggedIn;
  }

  logout(){
    this. ruoloUtente = "";
    this.loggedIn = false;
  }

  isAmministratore(){
    return (this.ruoloUtente.trim() === 'amministratore');
  }
}
