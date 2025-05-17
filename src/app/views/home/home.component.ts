import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  usuario = this.authService.getUsuario();

  constructor(private authService: AuthService) {}

  cerrarSesion() {
    this.authService.cerrarSesion();
    window.location.reload();
  }
}
