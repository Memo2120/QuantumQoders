import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private url = "http://localhost:8443/cliente"

  constructor(private http:HttpClient) { }

  guardar(cliente: object){
    return this.http.post<any>(this.url,cliente);
  }

  modificar(cliente: object){
    return this.http.put<any>(this.url,cliente);
  }

  consultar(email: string){
    return this.http.get<any>(this.url + "/email/" +email);
  }

  eliminar(email: string){
    return this.http.delete<any>(this.url + "/email/" + email);
  }

  ver_clientes(){
    return this.http.get<any>(this.url);
  }
}
