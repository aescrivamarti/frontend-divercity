import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {FooterComponent} from "../../shared/footer/footer.component";

@Component({
  selector: 'app-sobre-nosotros',
  standalone: true,
  imports: [
    RouterLink,
    FooterComponent
  ],
  templateUrl: './sobre-nosotros.component.html',
  styleUrl: './sobre-nosotros.component.css'
})
export class SobreNosotrosComponent {

}
