import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* ESTE MODULO REPRESENTA LAS RUTAS ENTRE COMPONENTES O LA NAVEGACION GENERAL, POR EJEMPLO

  HTTPS://LOCALHOST:4200/CARRITO
   HTTPS://LOCALHOST:4200/PRODUCTO/ID=?1
    HTTPS://LOCALHOST:4200/CARRITO/CATEGORIA

    ENTONCES EN ESTA SECCION SOLO SE TOCA CUANDO TENEMOS QUE PASAR A DIFERENTES PANTALLAS EN DONDE 
    TENEMOS INTERACCION CON OTRAS SECCIONES DE LA APLICACION
*/
const routes: Routes = [

  { path: '**',   redirectTo: '/' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
