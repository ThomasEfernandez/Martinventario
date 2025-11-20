import { Categoria } from './../../../categoria/interfaces/categoria-inteface';
import { Component, inject, Input } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CategoriaService } from 'app/categoria/services/categoria.service';
import { Etiqueta } from 'app/etiqueta/interfaces/etiqueta.interface';
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

  etiquetaModificada: boolean = false;
  categoria = history.state.categoria;
  etiqueta = history.state.etiqueta;

  router = inject(Router);

  activatedRoutes = inject(ActivatedRoute);

  fb = inject(FormBuilder);
  formulario = this.fb.nonNullable.group({
    nombreEtiqueta: ['', Validators.required],
  });

  ngOnInit(): void {
    this.activatedRoutes.paramMap.subscribe({
      next: (param) => {
        console.log('etiqueta ', this.etiqueta, 'categoria:', this.categoria);
      },
      error: (err: Error) => {
        console.log(err.message);
      },
    });
  }

  modificarEtiqueta() {
    if (this.formulario.valid) {
      const etiquetaMod = this.formulario.getRawValue();

      this.categoriaService.getCategoriaById(this.categoria.id).subscribe({
        next: (cat: Categoria) => {
          cat.etiquetas.forEach((etiqueta) => {
            if (etiqueta.id == this.etiqueta.id) {
              etiqueta.nombreEtiqueta = etiquetaMod.nombreEtiqueta;
              this.categoriaService
                .putCategoria(this.categoria.id, cat)
                .subscribe({
                  next: () => {
                    this.etiquetaModificada = true;
                    
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
