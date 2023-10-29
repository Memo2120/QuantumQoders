import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  private url = "https://localhost:8443/empleado"
  //private url = "http://localhost:3000/empleado"
  
  constructor(private http:HttpClient) { }

  guardar(empleado: object){
    return this.http.post<any>(this.url,empleado);
  }

  modificar(empleado: object){
    return this.http.put<any>(this.url,empleado);
  }

  consultar(email: string){
    return this.http.get<any>(this.url + "/email/" +email);
  }

  eliminar(email: string){
    return this.http.delete<any>(this.url + "/email/" + email);
  }

  ver_empleados(){
    return this.http.get<any>(this.url);
  }
}
