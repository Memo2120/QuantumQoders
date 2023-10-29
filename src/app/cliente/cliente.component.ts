import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../servicios/cliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit{

  cliente ={
    nombre: "",
    apellido_p: "",
    apellido_m: "",
    telefono: "",
    email: "",
    direccion: "",
    status: "Activo",
    genero: "",
  }
  clientes: any;

  constructor(private servicioCli:ClienteService){}
  ngOnInit(): void {

  }

  guardarCli(){
    this.servicioCli.guardar(this.cliente).subscribe(
      res=>{
        alert("Registro guardado");
        this.limpiar();
        this.consultarTodoCli();
    },
    err=>{
      alert("Registro guardado");
    }
    );
  }

  modificarCli(){
    if(confirm("Esta seguro de modificar")){
      this.servicioCli.modificar(this.cliente).subscribe(
        res=>{
          alert("Registro actualizado");
          this.limpiar();
          this.consultarTodoCli();
      },
      err=>{
        alert("Registro no actualizado");
      }
      );
    }
    
  }

  eliminarCli(){
    this.servicioCli.eliminar(this.cliente.email).subscribe(
      res=>{
        alert("Registro eliminado");
        this.limpiar();
        this.consultarTodoCli();
    },
    err=>{
      alert("Registro no eliminado");
    }
    );
  }

  consultarCli(){
    this.servicioCli.consultar(this.cliente.email).subscribe(
      res=>{
        this.cliente.nombre= res.cli.nombre;
        this.cliente.apellido_p= res.cli.ap_paterno;
        this.cliente.apellido_m= res.cli.ap_materno;
        this.cliente.telefono= res.cli.telefono;
        this.cliente.email= res.cli.email;
        this.cliente.direccion= res.cli.direccion;
        this.cliente.status= res.cli.status;
        this.cliente.genero= res.cli.genero;
    },
    err=>{
      alert("cliente no encontrado");
    }
    );
  }

  consultarTodoCli(){
    this.clientes = this.servicioCli.ver_clientes();
  }

  limpiar(){
    this.cliente.nombre= "";
    this.cliente.apellido_p= "";
    this.cliente.apellido_m= "";
    this.cliente.telefono= "";
    this.cliente.email= "";
    this.cliente.direccion= "";
    this.cliente.status= "";
    this.cliente.genero= "";
    }

}
