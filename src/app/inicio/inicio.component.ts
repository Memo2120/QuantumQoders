import { Component } from '@angular/core';
import { LoginService } from '../servicios/login.service';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {

  constructor(public ServicioLogin: LoginService){};
}
