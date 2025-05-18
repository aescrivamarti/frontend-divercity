import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService {
  private apiUrl = 'http://localhost:8080/api/usuarios';

  constructor(private http: HttpClient) {}

  // Obtener todos los usuarios
  obtenerTodos(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  // Actualizar un usuario
  actualizarUsuario(usuario: User): Observable<any> {
    return this.http.put(`${this.apiUrl}/${usuario.id}`, usuario);
  }

  // Eliminar un usuario
  eliminarUsuario(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
