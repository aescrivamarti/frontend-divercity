import { Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { AtraccionesComponent } from './views/atracciones/atracciones.component';
import { SobreNosotrosComponent } from './views/sobre-nosotros/sobre-nosotros.component';
import { LoginComponent } from './views/login/login.component';
import { RegistroComponent } from './views/registro/registro.component';
import { HacerReservaComponent } from './views/hacer-reserva/hacer-reserva.component';
import { GestionarReservasComponent } from './views/gestionar-reservas/gestionar-reservas.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'atracciones', component: AtraccionesComponent },
  { path: 'sobre-nosotros', component: SobreNosotrosComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'hacer-reserva', component: HacerReservaComponent },
  { path: 'gestionar-reservas', component: GestionarReservasComponent }
];
