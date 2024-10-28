import { Component } from '@angular/core';
import { Repositores } from '../../interfaces/Repositores.interface';
@Component({
  selector: 'app-aniadir-repositor',
  standalone: true,
  imports: [],
  templateUrl: './aniadir-repositor.component.html',
  styleUrl: './aniadir-repositor.component.css'
})
export class AniadirRepositorComponent {
 setRepositores : Set <Repositores>= new Set <Repositores>();

 aniadir = (repositor:Repositores)=>{
  this.setRepositores.add(repositor);
 }
}
