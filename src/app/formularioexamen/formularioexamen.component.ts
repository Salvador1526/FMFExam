import { Component, OnInit } from '@angular/core';
import { DatosUsuario } from '../models/datos.usuario'; /**importamos nuestro modelo de datos */
import { generos } from '../data/generos'; /**Mandar a llamar los Datos */
import { clubes } from '../data/clubes'; /**Mandar a llamar los datos de los club */
import { nacionalidades } from '../data/nacionalidades'; 

@Component({
  selector: 'app-formularioexamen',
  templateUrl: './formularioexamen.component.html',
  styleUrls: ['./formularioexamen.component.css']
})
export class FormularioexamenComponent implements OnInit {

  /**Vamos a crear un NEW USUARIO con una nueva propiedad */
  public usuario: DatosUsuario;
  public show_data;

  /**Vamos a mandar a llamar los DATA 
   * 
   *  public club: clubes;
      public genero: generos;
      public nacional: nacionalidades;
   * 
  */
 
  constructor() { 
    this.usuario = new DatosUsuario('','','','','','','','','','');
  }

  ngOnInit(): void {
       
  }
  /**
   * Vamos a declarar la CLASE de nuestro componente OnSubmit
   */

  onSubmit(form): void{
    this.show_data = this.usuario;
    alert("Evento submit lanzado");
    console.log(this.show_data);
  }


}
