import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './app-nova-transferencia.component.html',
  styleUrls: ['./app-nova-transferencia.component.scss']
})
export class AppNovaTransferenciaComponent implements OnInit {

  valor: number;
  destino: number;

  constructor() { }

  ngOnInit(): void {
  }

  transferir(){
    console.log("Solicitado nova transfêrencia");
    console.log("Valor ", this.valor);
    console.log("Destino ",  this.destino);
  }
}
