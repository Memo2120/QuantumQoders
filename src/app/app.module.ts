import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'

//Modulos
import { AppRoutingModule } from './app-routing.module';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Componentes
import { AppComponent } from './app.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { InicioComponent } from './inicio/inicio.component';
import { TipoComponent } from './tipo/tipo.component';
import { PedidoComponent } from './pedido/pedido.component';
import { PaqueteComponent } from './paquete/paquete.component';
import { DetallePedidoComponent } from './detalle-pedido/detalle-pedido.component';
import { DatosEnvioComponent } from './datos-envio/datos-envio.component';
import { ClienteComponent } from './cliente/cliente.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { SensorComponent } from './sensor/sensor.component';
import { IniciosesionComponent } from './iniciosesion/iniciosesion.component';

//Servicios
import { LoginService } from './servicios/login.service';
import { ClienteService } from './servicios/cliente.service';
import { TipoService } from './servicios/tipo.service';
import { SensorService } from './servicios/sensor.service';
import { PedidoService } from './servicios/pedido.service';
import { UsuarioService } from './servicios/usuario.service';
import { EmpleadoService } from './servicios/empleado.service';
import { DatosEnvioService } from './servicios/datos-envio.service';
import { DetallePedidoService } from './servicios/detalle-pedido.service';
import { EncabezadoComponent } from './encabezado/encabezado.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    InicioComponent,
    TipoComponent,
    PedidoComponent,
    PaqueteComponent,
    DetallePedidoComponent,
    DatosEnvioComponent,
    ClienteComponent,
    EmpleadoComponent,
    SensorComponent,
    IniciosesionComponent,
    EncabezadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatMenuModule,
    MatButtonModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    LoginService,
    ClienteService,
    EmpleadoService,
    SensorService,
    TipoService,
    PedidoService,
    UsuarioService,
    DatosEnvioService,
    DetallePedidoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
