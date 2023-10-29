import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from '../servicios/empleado.service';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit{
  empleado ={
    nombre: "",
    apellido_p: "",
    apellido_m: "",
    direccion: "",
    telefono: "",
    email: "",
    NSS: "",
    puesto: "",
    sueldo: "",
    genero: "",
    status: ""
  }

  empleados: any;

  constructor(private servicioEmp:EmpleadoService){}

  ngOnInit(): void {
    this.consultarTodoEmp();
  }

    guardarEmp(){
      this.servicioEmp.guardar(this.empleado).subscribe(
        res=>{
          alert("Registro guardado");
          this.limpiar();
          this.consultarTodoEmp();
      },
      err=>{
        alert("Registro no guardado");
      }
      );
    }

    modificarEmp(){
      if(confirm("Esta seguro de modificar")){
        this.servicioEmp.modificar(this.empleado).subscribe(
          res=>{
            alert("Registro actualizado");
            this.limpiar();
            this.consultarTodoEmp();
        },
        err=>{
          alert("Registro no actualizado");
        }
        );
      }
      
    }

    eliminarEmp(){
      this.servicioEmp.eliminar(this.empleado.email).subscribe(
        res=>{
          alert("Registro eliminado");
          this.limpiar();
          this.consultarTodoEmp();
      },
      err=>{
        alert("Registro no eliminado");
      }
      );
    }

    consultarEmp(){
      this.servicioEmp.consultar(this.empleado.email).subscribe(
        res=>{
          this.empleado.nombre= res.emp.nombre;
          this.empleado.apellido_p= res.emp.apellido_p;
          this.empleado.apellido_m= res.emp.apellido_m;
          this.empleado.direccion= res.emp.direccion;
          this.empleado.telefono= res.emp.telefono;
          this.empleado.email= res.emp.email;
          this.empleado.NSS= res.emp.NSS;
          this.empleado.puesto= res.emp.puesto;
          this.empleado.sueldo= res.emp.sueldo;
          this.empleado.genero= res.emp.genero;
          //this.empleado.status= res.emp.status;
      },
      err=>{
        alert("Empleado no encontrado");
      }
      );
    }

    consultarTodoEmp(){
      this.empleados = this.servicioEmp.ver_empleados();
    }

    limpiar(){
    this.empleado.nombre= "";
    this.empleado.apellido_p= "";
    this.empleado.apellido_m= "";
    this.empleado.direccion= "";
    this.empleado.telefono= "";
    this.empleado.email= "";
    this.empleado.NSS= "";
    this.empleado.puesto= "";
    this.empleado.sueldo= "";
    this.empleado.genero= "";
    }

  
}
