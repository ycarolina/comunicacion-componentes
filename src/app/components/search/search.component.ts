
import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { DataComponent } from '../data/data.component';
import { UsuariosService } from 'src/app/services/usuarios.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent implements OnInit {

  ci : string = " ";

  private usuario : any = {
    cel: "",
    ci: "",
    correo:  "",
    direccion: "",
    nombre:  "",
  };

  @Output() ciBuscado = new EventEmitter<any>();

  constructor( private servicioUsuario : UsuariosService ) {}

  
  ngOnInit(): void {
  }
  
  buscarUsuario( nroCi : string){
    
    this.ci = nroCi;
    console.log(this.ci);

    //console.log(this.ciBuscado);
    this.usuario =  this.servicioUsuario.buscarUsuario(this.ci);
    console.log(this.usuario);

    this.ciBuscado.emit(this.usuario);
    //this.datos.mostrarData();
  }
}
