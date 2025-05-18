import { Component , OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { Router, RouterModule } from '@angular/router';
import {FooterComponent} from "../../shared/footer/footer.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  usuario: any;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    this.usuario = this.authService.getUsuario();
  }

  ngOnInit() {
    this.usuario = this.authService.getUsuario();
  }

  cerrarSesion() {
    this.authService.cerrarSesion();
    this.usuario = this.authService.getUsuario(); // ← se vuelve a cargar (será null)
    this.router.navigate(['/']);
  }
}
