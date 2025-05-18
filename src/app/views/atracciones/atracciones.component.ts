import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import {FooterComponent} from "../../shared/footer/footer.component";

@Component({
  selector: 'app-atracciones',
  standalone: true,
  imports: [
    CommonModule, // ← Necesario si usas *ngFor, *ngIf, etc.
    RouterLink,
    FooterComponent
  ],
  templateUrl: './atracciones.component.html',
  styleUrl: './atracciones.component.css'
})
export class AtraccionesComponent {

  infoVisible: { [id: number]: boolean } = {};

  toggleInfo(id: number) {
    this.infoVisible[id] = !this.infoVisible[id];
  }

  atracciones = [
    {
      id: 1,
      nombre: 'Montaña Rusa',
      imagen: 'assets/atracciones/montana.png',
      descripcion: 'Una intensa experiencia llena de adrenalina.'
    },
    {
      id: 2,
      nombre: 'Casa del Terror',
      imagen: 'assets/atracciones/2.jpg',
      descripcion: 'Atrévete a entrar si te atreves...'
    },
    {
      id: 3,
      nombre: 'Río Bravo',
      imagen: 'assets/atracciones/3.jpg',
      descripcion: 'Aventura acuática con sorpresas.'
    },
    {
      id: 4,
      nombre: 'Zona Infantil',
      imagen: 'assets/atracciones/4.jpg',
      descripcion: 'Diversión segura para los más pequeños.'
    },
    {
      id: 5,
      nombre: 'Torre de Caída',
      imagen: 'assets/atracciones/5.jpg',
      descripcion: 'Siente el vacío en caída libre.'
    },
    {
      id: 6,
      nombre: 'Coches de Choque',
      imagen: 'assets/atracciones/6.jpg',
      descripcion: '¡Diversión para todas las edades!'
    },
    {
      id: 7,
      nombre: 'Simulador VR',
      imagen: 'assets/atracciones/7.jpg',
      descripcion: 'Viaja sin moverte en nuestra cabina 4D.'
    },
    {
      id: 8,
      nombre: 'Noria Gigante',
      imagen: 'assets/atracciones/8.jpg',
      descripcion: 'Disfruta de vistas panorámicas.'
    }
  ];
}
