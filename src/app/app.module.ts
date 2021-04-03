import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule,FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavegacionComponent } from './Components/navegacion/navegacion.component';
import { ProductosComponent } from './Components/productos/productos.component';

/* ESTE MODULO REPRESENTA LA DECLARACION DE LOS COMPONENTES HTML PARA QUE PUEDAN SER INVOCADOS
DESDE CUALQUIER PARTE DE ANGULAR Y ADEMAS PUEDE ALMACENAR DIFERENTES MODULO DEL MISMO ANGULAR
COMO POR EJEMPLO, FORMULARIOS, CLIENTE HTTP, NAVEGACION ENTRE ARCHIVOS, CONFIGURACIONES PERSONALIZADAS DE MODOLUS
ENTRE OTROS

CUANDO SE CREA UN COMPONENTE NUEVO, YA SEA POR EL CLI DE ANGULAR, ACA EN EL APP MODULE SE ACTUALIZA AUTOMATICAMENTE
PARA NO ESTAR DECLARANDO LOS COMPONENTES MANUALMENTE
*/
@NgModule({
  /*ACA DE DECLARAN LOS COMPONENTES */
  declarations: [
    AppComponent,
    NavegacionComponent,
    ProductosComponent,
  ],
  /*ACA DE IMPORTANTE MODULOS UTILITARIO DE ANGULAR, MODULOS DE FUNCIONALIDAD, ENTRE OTROS */
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
