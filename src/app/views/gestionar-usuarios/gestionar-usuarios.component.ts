import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';
import { RouterLink } from '@angular/router';
import { FooterComponent } from '../../shared/footer/footer.component';

@Component({
  selector: 'app-gestionar-usuarios',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, FooterComponent],
  templateUrl: './gestionar-usuarios.component.html',
  styleUrl: './gestionar-usuarios.component.css'
})
export class GestionarUsuariosComponent implements OnInit {
  usuarios: User[] = [];
  mensaje = '';
  esAdmin = false;

  constructor(
    private userService: UserService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    const usuario = this.authService.getUsuario();
    if (usuario && usuario.rol === 'ADMIN') {
      this.esAdmin = true;
      this.userService.obtenerTodos().subscribe(res => this.usuarios = res);
    }
  }

  actualizarUsuario(usuario: User): void {
    this.userService.actualizarUsuario(usuario).subscribe({
      next: () => this.mensaje = 'Usuario actualizado correctamente',
      error: () => this.mensaje = 'Error al actualizar usuario'
    });
  }

  eliminarUsuario(id: number | undefined): void {
    if (!id) return;
    this.userService.eliminarUsuario(id).subscribe({
      next: () => {
        this.mensaje = 'Usuario eliminado';
        this.usuarios = this.usuarios.filter(u => u.id !== id);
      },
      error: () => this.mensaje = 'Error al eliminar usuario'
    });
  }
}
