import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Opera } from './opera.model';
import { OpereService } from './opere.service';

@Component({
  selector: 'app-opera',
  templateUrl: './opera.component.html',
  styleUrls: ['./opera.component.css']
})
export class OperaComponent implements OnInit {


  id: number;
  opera: Opera;

  constructor(private route: ActivatedRoute, private operaService : OpereService, private router:Router) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params)=>{ this.id=+params['id'];
    this.opera = this.operaService.getOperaId(this.id);
  });
}

onClickAutore(){
  this.router.navigate(['/autore', this.opera.artistaId]);
}

}
