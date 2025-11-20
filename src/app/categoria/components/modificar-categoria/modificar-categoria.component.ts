import { Component, inject, Input } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Categoria } from 'app/categoria/interfaces/categoria-inteface';
import { CategoriaService } from 'app/categoria/services/categoria.service';
import { Usuario } from 'app/usuario/interfaces/usuario.interface';

@Component({
  selector: 'app-modificar-categoria',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './modificar-categoria.component.html',
  styleUrl: './modificar-categoria.component.css',
})
export class ModificarCategoriaComponent {
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

  catcat = history.state.categoria;

  categoriaService = inject(CategoriaService);

  router = inject(ActivatedRoute);

  categoriaModificada: boolean = false;

  fb = inject(FormBuilder);
  formulario = this.fb.nonNullable.group({
    id: [''],
    nombreCategoria: ['', Validators.required],
    estado: [false],
    etiquetas: [[]],
  });

  ngOnInit(): void {
    
    this.router.paramMap.subscribe({
      next: (params) => {
        this.buscarCategoria();
      },
      error: (e: Error) => {
        console.log(e.message);
      },
    });
  }

  buscarCategoria() {
    this.categoriaService.getCategoriaById(this.catcat.id).subscribe({
      next: (aux: Categoria) => {
        this.formulario.controls['id'].setValue(aux.id);
        this.formulario.controls['nombreCategoria'].setValue(
          aux.nombreCategoria
        );
        this.formulario.controls['estado'].setValue(aux.estado);
        // this.formulario.controls['etiquetas'].setValue(aux.etiquetas);
      },
      error: (e: Error) => {
        console.log(e.message);
      },
    });
  }

  modificarCategoria() {
    if (this.formulario.valid) {
      const categoria = this.formulario.getRawValue();
      this.categoriaService.putCategoria(categoria.id, categoria).subscribe({
        next: () => {
          this.categoriaModificada = true;
        },
        error: (e: Error) => {
          console.log(e.message);
        },
      });
    }
  }
}
