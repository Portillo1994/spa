import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HeroesService } from '../../services/heroes.service';



@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html'
})
export class BuscarComponent implements OnInit {

  heroes: any[] = [];
  termino: string;

  constructor( private _heroesService: HeroesService, private _activateRoute: ActivatedRoute ) {
   }

  ngOnInit() {

    this._activateRoute.params.subscribe( params => {
      this.heroes = this._heroesService.buscarHeroes( params[ 'termino' ] );
      this.termino = params[ 'termino' ];
    });
  }

}
