import { Component } from '@angular/core';
import { LoginService } from '../servicios/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-iniciosesion',
  templateUrl: './iniciosesion.component.html',
  styleUrls: ['./iniciosesion.component.css']
})
export class IniciosesionComponent {
  usuario ={
    email:"",
    password:""
  }
  constructor(public ServicioLogin: LoginService, private router:Router){

  }

  iniciosesion(){
    this.ServicioLogin.login(this.usuario).subscribe(
      //en caso de exito
      res=>{

        if(res.usu.tipo == "Empleado"){
          this.ServicioLogin.buscaEmp(this.usuario.email).subscribe(
          res=>{
            localStorage.setItem("usu", res.emp_logueado.email);
            localStorage.setItem("perfil", res.emp_logueado.puesto);
            localStorage.setItem("token", res.emp_logueado.jwtoken);

          },err=>{

          });

        }//cierre del if
        else if(res.usu.tipo == "Cliente"){
          this.ServicioLogin.buscaCli(this.usuario.email).subscribe(
            res=>{
              localStorage.setItem("usu", res.cli_logueado.email);
              localStorage.setItem("token", res.cli_logueado.jwtoken);
  
            },err=>{
  
            });
        }

        alert("Bienvenido");
        
        //Redireccionamiento
        this.router.navigate(['/inicio']);
      },
      //en caso de fracaso
      err=>{
        alert("Usuario o contraseña incorrectos");
      }
    );
  }

}
