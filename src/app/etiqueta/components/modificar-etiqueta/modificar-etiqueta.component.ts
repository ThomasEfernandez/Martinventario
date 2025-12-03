import { Categoria } from './../../../categoria/interfaces/categoria-inteface';
import { Component, inject, Input } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CategoriaService } from 'app/categoria/services/categoria.service';
import { Producto } from 'app/producto/interfaces/producto.interface';
import { ProductoService } from 'app/producto/services/producto.service';
import { Usuario } from 'app/usuario/interfaces/usuario.interface';

@Component({
  selector: 'app-modificar-etiqueta',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './modificar-etiqueta.component.html',
  styleUrl: './modificar-etiqueta.component.css',
})
export class ModificarEtiquetaComponent {
  @Input() user: Usuario = {
    id: '',
    nombre: '',
    apellido: '',
    usuario: '',
    contrasena: '',
    tipo: '',
    estado: false,
    mail: '',
  };

  categoriaService = inject(CategoriaService);
  productoService = inject(ProductoService);

  etiquetaModificada: boolean = false;
  categoria = history.state.categoria;
  etiqueta = history.state.etiqueta;

  router = inject(Router);

  activatedRoutes = inject(ActivatedRoute);

  fb = inject(FormBuilder);
  formulario = this.fb.nonNullable.group({
    id: [''],
    nombreEtiqueta: ['', Validators.required],
    estado: [false],
  });

  ngOnInit(): void {
    this.setearEtiqueta();
    this.activatedRoutes.paramMap.subscribe({
      next: (param) => {
        console.log('etiqueta ', this.etiqueta, 'categoria:', this.categoria);
      },
      error: (err: Error) => {
        console.log(err.message);
      },
    });
  }

  setearEtiqueta() {
    this.formulario.controls['id'].setValue(this.etiqueta.id);
    this.formulario.controls['nombreEtiqueta'].setValue(
      this.etiqueta.nombreEtiqueta
    );
    this.formulario.controls['estado'].setValue(this.etiqueta.estado);
  }

  modificarEtiqueta() {
    if (this.formulario.valid) {
      const etiquetaMod = this.formulario.getRawValue();
      this.categoriaService.getCategoriaById(this.categoria.id).subscribe({
        next: (cat: Categoria) => {
          cat.etiquetas.forEach((etiq) => {
            if (etiq.id == this.etiqueta.id) {
              etiq.nombreEtiqueta = etiquetaMod.nombreEtiqueta;
              this.categoriaService
                .putCategoria(this.categoria.id, cat)
                .subscribe({
                  next: () => {
                    this.etiquetaModificada = true;

                    this.productoService.getProductos().subscribe({
                      next: (prods: Producto[]) => {
                        prods.forEach((p) => {
                          if (p.etiqueta === this.etiqueta.nombreEtiqueta) {
                            p.etiqueta = etiquetaMod.nombreEtiqueta;
                            this.productoService
                              .putProducto(p.id, p)
                              .subscribe({
                                error: (e: Error) => {
                                  console.log(e.message);
                                },
                              });
                          }
                        });
                      },
                    });
                  },
                  error: (e: Error) => {
                    console.log(e.message);
                  },
                });
            }
          });
        },
        error: (e: Error) => {
          console.log(e.message);
        },
      });
    }
  }
}
