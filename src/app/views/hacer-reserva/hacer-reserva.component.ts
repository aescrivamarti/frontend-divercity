import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReservaService } from '../../services/reserva.service';
import { Reserva } from '../../models/reserva.model';
import { AuthService } from '../../services/auth.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-hacer-reserva',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './hacer-reserva.component.html',
  styleUrl: './hacer-reserva.component.css'
})
export class HacerReservaComponent {
  reserva: Reserva = {
    email: '',
    fecha: '',
    hora: '',
    numPersonas: 1
  };

  mensaje = '';

  constructor(private reservaService: ReservaService, private authService: AuthService) {
    const usuario = this.authService.getUsuario();
    if (usuario) {
      this.reserva.email = usuario.email;
      this.reserva.usuario = usuario;
    }
  }

  hacerReserva() {
    this.reservaService.crearReserva(this.reserva).subscribe({
      next: () => {
        this.mensaje = 'Reserva registrada correctamente';
        this.reserva.fecha = '';
        this.reserva.hora = '';
        this.reserva.numPersonas = 1;
      },
      error: () => {
        this.mensaje = 'Error al registrar la reserva';
      }
    });
  }
}
