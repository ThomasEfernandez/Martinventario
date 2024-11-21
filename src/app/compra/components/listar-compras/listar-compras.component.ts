import { Component, inject, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Compra } from 'app/compra/interfaces/compra.interface';
import { CompraService } from 'app/compra/services/compra.service';

@Component({
  selector: 'app-listar-compras',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './listar-compras.component.html',
  styleUrl: './listar-compras.component.css',
})
export class ListarComprasComponent {
  @Input() tipo: string = '';

  compraServices = inject(CompraService);
  listaCompras: Compra[] = [];

  listarCompras() {
    this.compraServices.getCompras().subscribe({
      next: (aux: Compra[]) => {
        this.listaCompras = aux;
      },
      error: (e: Error) => {
        console.log(e.message);
      },
    });
  }

  ngOnInit() {
    this.listarCompras();
  }
}
