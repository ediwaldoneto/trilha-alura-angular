import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './app-nova-transferencia.component.html',
  styleUrls: ['./app-nova-transferencia.component.scss']
})
export class AppNovaTransferenciaComponent implements OnInit {

  @Output() aoTransferir = new EventEmitter<any>();


  valor: number;
  destino: number;

  constructor() { }

  ngOnInit(): void {
  }


  transferir() {
    console.log("Solicitado nova transfêrencia");

    if (this.ehValido()) {
      const valorEnviar = { valor: this.valor, destino: this.destino };
      this.aoTransferir.emit(valorEnviar);
      //this.limparCampos();
    }


  }

  limparCampos() {
    this.valor = 0;
    this.destino = 0;
  }

  ehValido() {
    const valido = this.valor && this.destino > 0;
    if (!valido) {
      console.log("Digite valores válidos");
    }
    return valido;
  }
}
