import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute, Router } from '@angular/router';
import { AutoriService } from './autori.service';
import { Autore } from './autore.model';
import { Opera } from '../opera/opera.model';
import { OpereService } from '../opera/opere.service';

@Component({
  selector: 'app-autore',
  templateUrl: './autore.component.html',
  styleUrls: ['./autore.component.css'],
  providers: []
})
export class AutoreComponent implements OnInit {
  id: number;
  artista: Autore;
  listaOpere: Opera[];

  constructor(private route: ActivatedRoute, private autoreService : AutoriService, private operaService: OpereService, private router:Router) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params)=>{ this.id=+params['id'];
    this.artista = this.autoreService.getAutoreId(this.id);
    this.listaOpere = this.operaService.getOpereofAutore(this.id);
    });

  }

  onClickOpera(id){
  this.router.navigate(['/opera', id]);
}

}
