import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import {Router, RouterLink} from '@angular/router';
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email = '';
  password = '';
  mensaje = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.login(this.email, this.password).subscribe({
      next: (user) => {
        this.mensaje = 'Inicio de sesión exitoso. Bienvenido.';
        localStorage.setItem('usuario', JSON.stringify(user));
        this.router.navigate(['/']);
      },
      error: (err) => {
        this.mensaje = err.error || 'Credenciales inválidas';
      }
    });
  }
}
