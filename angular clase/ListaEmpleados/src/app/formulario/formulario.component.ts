import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import {Empleado} from '../models/empleado.model';
import{FormGroup, FormControl,Validators} from '@angular/forms'
import { EmpleadosService } from '../empleados.service'

@Component({
  selector: 'formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  @Output() pasarEmpleado = new EventEmitter
  formulario: FormGroup
  constructor(private empleadosService: EmpleadosService) {
  }

  ngOnInit() {
    this.formulario= new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]),
    lastName: new FormControl('',Validators.required),
    adress: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
    department: new FormControl('', this.validarDept),
    picture: new FormControl('')
    })
  }

  recogerInfo(pNombre, pApellido, pDireccion, pDepartamento, pFoto){
    let empleado = new Empleado(pNombre, pApellido, pDireccion, pDepartamento, pFoto)
    this.pasarEmpleado.emit(empleado)
  }

  handleOnSubmit(values){

    let nuevoEmpleado =  new Empleado(values.name, values.lastName, values.adress, values.department, values.picture)
    this.empleadosService.agregarEmpleado(nuevoEmpleado)

  }
  validarDept(control){
    let dept = control.value
    if(dept === 'contabilidad' || dept === 'marketing' || dept === 'rrhh'){
      return null
    }else{
      return{ mensaje: 'No existe este departamento'}
    }
  }
}
