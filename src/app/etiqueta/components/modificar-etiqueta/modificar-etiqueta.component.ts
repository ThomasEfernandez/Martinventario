import { Component, inject, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from 'app/categoria/interfaces/categoria-inteface';
import { CategoriaService } from 'app/categoria/services/categoria.service';

@Component({
  selector: 'app-modificar-etiqueta',
  standalone: true,
  imports: [],
  templateUrl: './modificar-etiqueta.component.html',
  styleUrl: './modificar-etiqueta.component.css',
})
export class ModificarEtiquetaComponent {
  @Input() tipo: string | null = null;

  categoriaService = inject(CategoriaService);

  etiquetaModificada: boolean = false;

  router = inject(Router);

  id: string | null = null;

  activatedRoutes = inject(ActivatedRoute);

  fb = inject(FormBuilder);
  formulario = this.fb.nonNullable.group({
    id: [''],
    nombreCategoria: ['', Validators.required],
    estado: [false],
    etiquetas: [[]],
  });

  ngOnInit(): void {
    this.activatedRoutes.paramMap.subscribe({
      next: (param) => {
        this.id = param.get('id');
        this.getCategoriaById(this.id);
      },
      error: (err: Error) => {
        console.log(err.message);
      },
    });
  }

  getCategoriaById(id: string | null) {
    this.categoriaService.getCategoriaById(id).subscribe({
      next: (categoria: Categoria) => {
        this.formulario.controls['id'].setValue(categoria.id);
        this.formulario.controls['nombreCategoria'].setValue(
          categoria.nombreCategoria
        );
        this.formulario.controls['estado'].setValue(categoria.estado);
      },
      error: (err: Error) => {
        console.log(err.message);
      },
    });
  }

  modificarEtiqueta() {
    if (this.formulario.valid) {
      // const categoria = this.formulario.getRawValue();
      const etiqueta = this.formulario.getRawValue();

      // this.categoriaService.getCategoriaById(this.categoria).subscribe({
      //   next: (categoria: Categoria) => {
      //     let e = {
      //       id: `${categoria.etiquetas.length + 1}`,
      //       nombreEtiqueta: etiqueta.nombreEtiqueta,
      //       estado: etiqueta.estado,
      //     };
      //     console.log(e);

      //     categoria.etiquetas.push(e);
      //     this.agregarEtiquetaService(categoria);
      //     this.etiquetaAgregada = true;
      //   },
      // });
    } else {
      this.formulario.markAllAsTouched();
    }
  }

  putCategoriaService(categoria: Categoria) {
    this.categoriaService.putCategoria(this.id, categoria).subscribe({
      next: () => {
        if (this.tipo === 'admin') {
          this.router.navigateByUrl('admin/proveedores');
        } else if (this.tipo === 'repositor') {
          this.router.navigateByUrl('repositor/proveedores');
        }
      },
      error: (err: Error) => {
        console.log(err.message);
      },
    });
  }
}
