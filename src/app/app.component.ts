import { Component } from '@angular/core';

import {Empleados} from './models/empleados';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  empleadosArray: Empleados[] = [
    {id:1, nombre: "Jose", pais: "Chile"},
    {id:2, nombre: "Carlos", pais: "Colombia"},
    {id:3, nombre: "Camilo", pais: "Argentina"},
  ];
 
  selectedEmpleados: Empleados = new Empleados();
  openForEditar(empleados: Empleados){
     this.selectedEmpleados = empleados;
  }

  addOrEditar(){
    this.selectedEmpleados.id = this.empleadosArray.length + 1;
    this.empleadosArray.push(this.selectedEmpleados);

    this.selectedEmpleados = new Empleados();
  }

  delete(){
  if(confirm('Quieres Eliminar tus Datos')){
    this.empleadosArray = this.empleadosArray.filter(x => x != this.selectedEmpleados);
    this.selectedEmpleados = new Empleados();
  }

  }

}
