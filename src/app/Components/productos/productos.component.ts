import { Component, OnInit } from '@angular/core';
/* EN LOS COMPONENTES DE ANGULAR, ESTOS FUNCIONAN CON TYPESCRIPT(JAVASCRIPT FUERTEMENTE TIPEADO CON TIPOS DE DATOS), Y ADEMAS TENEMOS:
    SELECTOR= NOMBRE CON EL QUE SE INVOCA ESTE COMPONENTE
    TEMPLATEURL= REPRESENTE EL ARCHIVO HTML CON EL QUE VA A TRABAJAR ESTE COMPONENTE O MEJOR DICHO, LO QUE VA A REPRESENTAR
    A NIVEL GUI
    STYLEURLS= ES EL ARCHIVO CSS CORRESPONDIENTE AL COMPONENTE, POR SI QUIEREN QUE ESTE COMPONENTE TENGA ALGUN ESTILO PERSONALIZADO
*/
@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
