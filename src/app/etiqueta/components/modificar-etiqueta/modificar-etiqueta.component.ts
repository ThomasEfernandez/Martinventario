import { Component, inject, Input } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Categoria } from 'app/categoria/interfaces/categoria-inteface';
import { CategoriaService } from 'app/categoria/services/categoria.service';

@Component({
  selector: 'app-modificar-etiqueta',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './modificar-etiqueta.component.html',
  styleUrl: './modificar-etiqueta.component.css',
})
export class ModificarEtiquetaComponent {
  @Input() tipo: string = '';

  router = inject(Router);
  activatedRoute = inject(ActivatedRoute);

  categoriaService = inject(CategoriaService);

  fb = inject(FormBuilder);
  formulario = this.fb.nonNullable.group({
    id: [''],
    nombreEtiqueta: ['', [Validators.required, Validators.minLength(3)]],
    estado: [false],
  });

  idCategoria: string | null = '';
  idEtiqueta: string | null = '';

  etiquetaModificada: boolean = false;

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe({
      next: (param) => {
        this.idCategoria = param.get('idC');
        this.idEtiqueta = param.get('idE');
        this.getEtiquetaById(this.idCategoria, this.idEtiqueta);
      },
      error: (err: Error) => {
        console.log(err.message);
      },
    });
  }

  getEtiquetaById(idCategoria: string | null, idEtiqueta: string | null) {
    this.categoriaService.getCategoriaById(idCategoria).subscribe({
      next: (categoria: Categoria) => {
        categoria.etiquetas.forEach((e) => {
          if (e.id === idEtiqueta) {
            this.formulario.controls['id'].setValue(e.id);
            this.formulario.controls['nombreEtiqueta'].setValue(
              e.nombreEtiqueta
            );
            this.formulario.controls['estado'].setValue(e.estado);
          }
        });
      },
      error: (err: Error) => {
        console.log(err.message);
      },
    });
  }

  actualizarEtiqueta() {
    if (this.formulario.valid) {
      const etiqueta = this.formulario.getRawValue();
      this.categoriaService.getCategoriaById(this.idCategoria).subscribe({
        next: (categoria: Categoria) => {
          categoria.etiquetas.forEach((e) => {
            if (e.id === etiqueta.id) {
              e.nombreEtiqueta = etiqueta.nombreEtiqueta;
              this.categoriaService
                .putCategoria(categoria.id, categoria)
                .subscribe({
                  error: (err: Error) => {
                    console.log(err.message);
                  },
                });
              this.etiquetaModificada = true;
            }
          });
        },
      });
    }
  }

  volver() {
    this.router.navigate(['/admin/categoria/' + this.idCategoria]);
  }
}
