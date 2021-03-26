import { Component } from '@angular/core';
/**
 * Vamos a importar los Datos del directorio DATA {objetoJson}
 *import { Data } from './data/generos';
 */




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'jr-test';

  /**
   * Crearemos el constructor de nuestra clase 
   * 
   * constructor(){
    this.id = Data.id;
  }
   */

  
  
  ngOnInit(): void
  {   

  }

}
