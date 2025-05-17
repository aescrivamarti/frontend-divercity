import { User } from './user.model';

export interface Reserva {
  id?: number;
  email: string;
  fecha: string; // formato YYYY-MM-DD
  hora: string;  // formato HH:mm
  numPersonas: number;
  usuario?: User;
}
