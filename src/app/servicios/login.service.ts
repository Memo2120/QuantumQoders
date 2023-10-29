import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url_login = "https://localhost:8443/usuario/iniciosesion"
  private url_Emp = "https://localhost:8443/empleado";
  private url_Cli = "https://localhost:8443/cliente";

  constructor(private http:HttpClient, private router:Router) { }

  login(usuario:object){
    return this.http.post<any>(this.url_login, usuario);
  }

  cerrar_sesion(){
    //eliminar una por una variable del local storage (no recomendable)
    // localStorage.removeItem("usu");

    //eliminar todas
    localStorage.clear();
    this.router.navigate(['/iniciosesion']);
  }

  eslogueado():boolean{
    // if (localStorage.getItem("usu") != null) {
    //   return true;
    // } else{
    //   return false;
    // }
    return !!localStorage.getItem("usu");
  }

  getToken(){
    return localStorage.getItem("token");
  }

  buscaEmp(email: String){
    return this.http.get<any>(this.url_Emp + "/emplogin/" + email);
  }

  buscaCli(email: String){
    return this.http.get<any>(this.url_Cli + "/clilogin/" + email);
  }
}
