import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { ReservaService } from '../../services/reserva.service';
import { Reserva } from '../../models/reserva.model';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-gestionar-reservas',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './gestionar-reservas.component.html',
  styleUrl: './gestionar-reservas.component.css'
})
export class GestionarReservasComponent {
  reservas: Reserva[] = [];
  mensaje = '';
  esAdmin = false;

  constructor(
    private reservaService: ReservaService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    const usuario = this.authService.getUsuario();
    if (usuario) {
      this.esAdmin = usuario.rol === 'ADMIN';
      if (this.esAdmin) {
        this.reservaService.obtenerTodas().subscribe(res => this.reservas = res);
      } else {
        this.reservaService.obtenerPorEmail(usuario.email).subscribe(res => this.reservas = res);
      }
    }
  }

  actualizarReserva(reserva: Reserva) {
    this.reservaService.actualizarReserva(reserva).subscribe({
      next: () => this.mensaje = 'Reserva actualizada',
      error: () => this.mensaje = 'Error al actualizar la reserva'
    });
  }

  eliminarReserva(id: number | undefined) {
    if (!id) return;
    this.reservaService.eliminarReserva(id).subscribe({
      next: () => {
        this.mensaje = 'Reserva eliminada';
        this.reservas = this.reservas.filter(r => r.id !== id);
      },
      error: () => this.mensaje = 'Error al eliminar la reserva'
    });
  }
}
