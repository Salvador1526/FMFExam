import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/**importar los componentes que vamos a utilizar */
import { FormularioexamenComponent } from './formularioexamen/formularioexamen.component';
import { generos } from './data/generos';

/**import { clubes } from '../app/data/clubes;'
import { nacionalidades } from '../app/data/nacionalidades;'
**/


const routes: Routes = [
  {path: '', component: FormularioexamenComponent},
  {path: 'app-formularioexamen', component: FormularioexamenComponent },
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
