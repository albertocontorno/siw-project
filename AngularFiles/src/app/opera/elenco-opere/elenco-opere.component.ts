import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Opera } from '../opera.model';
import { OpereService } from '../opere.service';
import { Subscription } from 'rxjs/Subscription';
import { UtenteService } from '../../utente.service';

@Component({
  selector: 'app-elenco-opere',
  templateUrl: './elenco-opere.component.html',
  styleUrls: ['./elenco-opere.component.css'],
})
export class ElencoOpereComponent implements OnInit {

  opere : Opera[];
  subscription: Subscription;
  @ViewChild('wrapper') w: ElementRef;

  constructor(private router: Router, private route: ActivatedRoute, private opereService: OpereService, private r: Renderer2, private utenteService: UtenteService){}

  ngOnInit() {
    this.subscription = this.opereService.opereChanged.subscribe(
      (opere: Opera[]) => {
        this.opere = opere;
        if(this.opere.length>0){ this.creaDisposizione2();}
         }
    );
    this.opereService.getOpere();
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
    let letteraIniziale = this.opere[0].titolo.charAt(0).toUpperCase();
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
     for( let opera of this.opere ){
      if(letteraIniziale != opera.titolo[0].charAt(0).toUpperCase()){
        letteraIniziale = opera.titolo[0].charAt(0).toUpperCase();
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
      li.innerText = opera.titolo+' - '+opera.artistaCognome;
      this.r.addClass(li, 'list-group-item');
      this.r.addClass(li, 'list-group-item-action');
      if(this.utenteService.getRuoloUtente().trim()==='amministratore'.trim()){
      span = this.r.createElement('span');
      span.innerText = 'X';
      this.r.addClass(span, 'badge' );
      this.r.addClass(span, 'badge-danger' );
      this.r.addClass(span, 'ml-auto');
      this.r.addClass(span, 'puntatore');
      this.r.appendChild(li, span);
      }
      li.id = ''+opera.id;
      this.r.listen(li, 'click', (e:Event)=>{ this.handleClick(e) });
      this.r.appendChild(ul, li );
     }//end for
  }


  handleClick(e:Event){
    if(e.srcElement.tagName.trim() === 'LI'.trim()){
      this.navigateOpera(e.srcElement.id);
    } else if(e.srcElement.tagName.trim() === 'SPAN'.trim()) {
      this.opereService.deleteOpera(+e.srcElement.parentElement.id);

    }

  }

  navigateOpera(id){
    this.router.navigate(['/opera', id]);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
