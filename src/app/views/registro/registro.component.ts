import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user.model';
import { CommonModule } from '@angular/common';
import {RouterLink} from "@angular/router";
import {FooterComponent} from "../../shared/footer/footer.component";

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, FooterComponent],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {
  usuario: User = {
    nombre: '',
    email: '',
    telefono: '',
    password: ''
  };

  mensaje: string = '';

  constructor(private authService: AuthService) {}

  registrar() {
    this.authService.registrar(this.usuario).subscribe({
      next: () => {
        this.mensaje = 'Registro exitoso. Ahora puedes iniciar sesión.';
        this.usuario = { nombre: '', email: '', telefono: '', password: '' };
      },
      error: (err) => {
        this.mensaje = err.error || 'Error al registrar usuario.';
      }
    });
  }
}
