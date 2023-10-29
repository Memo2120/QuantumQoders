import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//listado de modulos
import { EmpleadoComponent } from './empleado/empleado.component';
import { ClienteComponent } from './cliente/cliente.component';
import { InicioComponent } from './inicio/inicio.component';
import { IniciosesionComponent } from './iniciosesion/iniciosesion.component';
//Listado de guards
import { RutasGuard } from './guardias/rutas.guard';


const routes: Routes = [
  {path:"inicio", component:InicioComponent},
  {path:"iniciosesion", component:IniciosesionComponent},
  {path:"empleado", component:EmpleadoComponent, canActivate:[RutasGuard]},
  {path:"**", redirectTo:"/inicio"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
