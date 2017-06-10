import { Component, OnInit } from '@angular/core';
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
  }


  onAnchorClick ( ) {
      this.route.fragment.subscribe ( f => {
        const element = document.querySelector ( "#" + f )
        if ( element ) element.scrollIntoView ( element )
      });
    }
}
