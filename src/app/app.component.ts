import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bytebank';
  transferencias: any[] = [];


  transferir($event) {
    console.log($event);
    const transferencias = { ...$event, data: new Date() };
    this.transferencias.push(transferencias);
  }

}
