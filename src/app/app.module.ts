import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; /**Importamos los formularios de NG */
import { NgWizardModule, NgWizardConfig, THEME } from 'ng-wizard'; /**Cargar los Modulos del Wizard */

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioexamenComponent } from './formularioexamen/formularioexamen.component';

/**Declaracion del Wizard */
const ngWizardConfig: NgWizardConfig = {
  theme: THEME.default
};

@NgModule({
  declarations: [
    AppComponent,
    FormularioexamenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    /** Debemos de cargar los modulos internos/externos del Modulo */
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
