import { Component, OnInit, OnDestroy, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Autore } from '../autore.model';
import { AutoriService } from '../autori.service';
import { Subscription } from "rxjs/Subscription";
import { UtenteService } from '../../utente.service';
@Component({
  selector: 'app-elenco-autori',
  templateUrl: './elenco-autori.component.html',
  styleUrls: ['./elenco-autori.component.css'],
  providers: []
})
export class ElencoAutoriComponent implements OnInit, OnDestroy {

  artisti: Autore[];
  subscription: Subscription;
  @ViewChild('wrapper') w: ElementRef;

  constructor(private router: Router, private route: ActivatedRoute, private autoriService: AutoriService, private r: Renderer2, private utenteService: UtenteService){}

  ngOnInit() {
    this.subscription = this.autoriService.autoriChanged.subscribe(
      (artisti: Autore[]) => {
        this.artisti = artisti;
        if(this.artisti.length>0){ this.creaDisposizione2();}
         }
    );
    this.autoriService.getAutori();
    let h = window.innerHeight;
    let nh = $('#navbarTop').outerHeight();
    $('#nav-side').height(h-nh);

  }


  onAnchorClick ( ) {
      this.route.fragment.subscribe ( f => {
        const element = document.querySelector ( "#" + f )
        if ( element ){ element.scrollIntoView ()
          window.scrollBy(0,-56)
        }
      });
    }

  creaDisposizione2(){
    let wrap: HTMLDivElement = this.w.nativeElement;
    wrap.innerHTML = '';
    let letteraIniziale = this.artisti[0].cognome.charAt(0).toUpperCase();
    let h2: HTMLHeadElement = this.r.createElement('h2');
    h2.innerText = letteraIniziale.toUpperCase();
    h2.id=letteraIniziale.toLocaleLowerCase();
    this.r.addClass(h2, 'mt-5');
    this.r.appendChild(wrap, h2);
    let hr = this.r.createElement('hr');
    this.r.appendChild(wrap, hr);
    let ul:HTMLUListElement = this.r.createElement('ul');
    this.r.addClass(ul, 'list-group');
    this.r.appendChild(wrap, ul);
    let li:HTMLLIElement;
    let id;
    let span: HTMLSpanElement;
     for( let artista of this.artisti ){
      if(letteraIniziale != artista.cognome[0].charAt(0).toUpperCase()){
        letteraIniziale = artista.cognome[0].charAt(0).toUpperCase();
        h2 = this.r.createElement('h2');
        h2.innerText = letteraIniziale.toUpperCase();
        h2.id=letteraIniziale.toLocaleLowerCase();
        this.r.addClass(h2, 'mt-5');
        this.r.appendChild(wrap, h2);
        hr = this.r.createElement('hr');
        this.r.appendChild(wrap, hr);
        ul = this.r.createElement('ul');
        this.r.addClass(ul, 'list-group');
        this.r.appendChild(wrap, ul);
      }//end if
      li = this.r.createElement('li');
      li.innerText = artista.cognome+' - '+artista.nome;
      this.r.addClass(li, 'list-group-item');
      this.r.addClass(li, 'list-group-item-action');
      //this.r.addClass(li, 'elemento');
      //new
      if(this.utenteService.getRuoloUtente().trim()==='amministratore'.trim()){
      span = this.r.createElement('span');
      span.innerText = 'X';
      this.r.addClass(span, 'badge' );
      this.r.addClass(span, 'badge-danger' );
      this.r.addClass(span, 'ml-auto');
      this.r.addClass(span, 'puntatore');
      this.r.appendChild(li, span);
      }
      //fine new
      li.id = ''+artista.id;
      this.r.listen(li, 'click', (e:Event)=>{this.handleClick(e)});
      this.r.appendChild(ul, li );
     }//end for
  }

    handleClick(e:Event){
    if(e.srcElement.tagName.trim() === 'LI'.trim()){
      this.navigateAutore(e.srcElement.id);
    } else if(e.srcElement.tagName.trim() === 'SPAN'.trim()) {
      this.autoriService.deleteAutore(+e.srcElement.parentElement.id);

    }

  }

  navigateAutore(id){
    this.router.navigate(['/autore', id]);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
