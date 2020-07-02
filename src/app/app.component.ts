import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //ci : string;

  usuario : any = {
              cel: "",
              ci: "",
              correo:  "",
              direccion: "",
              nombre:  "",
            };
  



  @Output() emisor = new EventEmitter<any>();


  constructor(){

    this.emisor.emit(this.usuario);

  }


}
