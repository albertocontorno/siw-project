import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Opera } from '../opera.model';
import { OpereService } from '../opere.service';

@Component({
  selector: 'app-elenco-opere',
  templateUrl: './elenco-opere.component.html',
  styleUrls: ['./elenco-opere.component.css'],
  providers: [OpereService]
})
export class ElencoOpereComponent implements OnInit {

  opere : Opera[];

  constructor(private router: Router, private route: ActivatedRoute, private opereService: OpereService){}

  ngOnInit() {
    this.opere = this.opereService.getOpere();

    let h = window.innerHeight;
    let nh = $('#navbarTop').outerHeight();
    $('#nav-side').height(h-nh);

    this.creaDisposizione();
  }


  onAnchorClick ( ) {
      this.route.fragment.subscribe ( f => {
        const element = document.querySelector ( "#" + f )
        if ( element ) element.scrollIntoView ( element )
      });
    }

  creaDisposizione(){
    let divWrapper = $('#div-wrapper');
    let letteraIniziale = this.opere[0].titolo.charAt(0);
    divWrapper.append('<h2 class="mt-5" id="'+letteraIniziale.toLocaleLowerCase()+'">'+letteraIniziale+'</h2>');
    divWrapper.append('<hr/>');
    let divCorr = $('<ul class="list-group"></ul>');
    divWrapper.append(divCorr);
    for( let opera of this.opere ){
      if(letteraIniziale != opera.titolo[0].charAt(0)){
        letteraIniziale = opera.titolo[0].charAt(0);
        divWrapper.append('<h2 class="mt-5" id="'+letteraIniziale.toLocaleLowerCase()+'">'+letteraIniziale+'</h2>');
        divWrapper.append('<hr>');
        divCorr = $('<ul class="list-group"></ul>');
        divWrapper.append(divCorr);
      }
      divCorr.append($('<li class="list-group-item">'+opera.titolo+' - '+opera.autore+'</li>'));
    }

  }
}
