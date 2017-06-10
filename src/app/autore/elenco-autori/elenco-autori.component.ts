import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-elenco-autori',
  templateUrl: './elenco-autori.component.html',
  styleUrls: ['./elenco-autori.component.css']
})
export class ElencoAutoriComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute){}

  ngOnInit() {
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
