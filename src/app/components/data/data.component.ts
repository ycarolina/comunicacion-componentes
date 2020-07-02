import { Component, OnInit, Input } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styles: [
  ]
})
export class DataComponent implements OnInit {

  //@Input() ciBuscado : string = "";

  @Input() usuario : any = {
                            cel: "",
                            ci: "",
                            correo:  "",
                            direccion: "",
                            nombre:  "",
                          };

  
  constructor( ) { 

  }

  ngOnInit(): void {
  }

  
  

}
