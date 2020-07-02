import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private usuarios : Usuario[] = [];
  private usuarioEncontrado : Usuario ;
  private encontrado = true;


  constructor( private http : HttpClient ) { 
    console.log("servicio funcionando");
    this.http.get('https://comunicacion-componentes.firebaseio.com/usuarios.json')
      .subscribe( (listaUsers : any) => {
        console.log(listaUsers);
        this.usuarios = listaUsers;
      });
  }



  buscarUsuario(ciBuscado : string){

    for (let usuario of this.usuarios) {

      let ciX = usuario.ci;
      console.log(ciX);
      
      if( ciX == ciBuscado ){  
          this.encontrado = true;

          console.log(usuario);
          console.log(usuario.nombre);
          this.usuarioEncontrado = usuario;

          return this.usuarioEncontrado;
      }else{
        this.encontrado = false;
      }
      
    }

    if(!this.encontrado){
      console.log("no encontrado");
      console.log(this.usuarioEncontrado);

      
      this.usuarioEncontrado.cel ="";
      this.usuarioEncontrado.ci ="";
      this.usuarioEncontrado.correo ="";
      this.usuarioEncontrado.direccion ="";
      this.usuarioEncontrado.nombre ="";
    }

    return this.usuarioEncontrado;
  }
}

interface Usuario{
  cel: string;
  ci: string;
  correo: string;
  direccion: string;
  nombre: string;
}
