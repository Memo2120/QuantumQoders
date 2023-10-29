import { Component } from '@angular/core';
import { LoginService } from '../servicios/login.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent {
  constructor(public ServicioLogin: LoginService){};

}
