import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-hereoe-tarjeta',
  templateUrl: './hereoe-tarjeta.component.html',
  styleUrls: ['./hereoe-tarjeta.component.css']
})
export class HereoeTarjetaComponent implements OnInit {


  @Input() heroe: any = { };
  @Input() index: number;

  @Output() heroeSeleccionado: EventEmitter<number>;
  
  constructor( private _router: Router) {

    this.heroeSeleccionado = new EventEmitter();
   }

  ngOnInit() {
  }

  VerHeroe() {
    
    this._router.navigate( ['/heroe', this.index ]);
    // this.heroeSeleccionado.emit( this.index );
  }

}
