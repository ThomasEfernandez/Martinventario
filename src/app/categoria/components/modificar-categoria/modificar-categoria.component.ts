import { Component, inject, Input } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Categoria } from 'app/categoria/interfaces/categoria-inteface';
import { CategoriaService } from 'app/categoria/services/categoria.service';
import { Etiqueta } from 'app/etiqueta/interfaces/etiqueta.interface';

@Component({
  selector: 'app-modificar-categoria',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './modificar-categoria.component.html',
  styleUrl: './modificar-categoria.component.css',
})
export class ModificarCategoriaComponent {
  @Input() tipo: string | null = null;

  categoriaService = inject(CategoriaService);

  proveedorAgregado: boolean = false;

  router = inject(Router);

  id: string | null = null;
  activaredRoutes = inject(ActivatedRoute);

  fb = inject(FormBuilder);
  formulario = this.fb.nonNullable.group({
    id: [''],
    nombreCategoria: ['', Validators.required],
    estado: [false],
    etiquetas: [[]],
  });

  getCategoriaById(id: string | null) {
    this.categoriaService.getCategoriaById(id).subscribe({
      next: (categoria: Categoria) => {
        this.formulario.controls['id'].setValue(categoria.id);
        this.formulario.controls['nombreCategoria'].setValue(
          categoria.nombreCategoria
        );
        this.formulario.controls['estado'].setValue(categoria.estado);
        // this.formulario.controls['etiquetas'].setValue(categoria.etiquetas);
      },
      error: () => {
        console.log('error....');
      },
    });
  }

  categoriaModificada: boolean = false;
  
  update() {
    if (this.formulario.invalid) return;
    const categoria = this.formulario.getRawValue();
    this.categoriaService.putCategoria(this.id, categoria).subscribe({
      next: () => {
        console.log('Actualizado');
        this.categoriaModificada = true;
        // if(this.tipo === 'admin'){
        //   this.router.navigateByUrl('admin/proveedores')
        // }else if (this.tipo === 'repositor'){
        //   this.router.navigateByUrl('repositor/proveedores')
        // }
      },
      error: (e: Error) => {
        console.log(e.message);
      },
    });
  }

  ngOnInit(): void {
    this.activaredRoutes.paramMap.subscribe({
      next: (param) => {
        this.id = param.get('id');
        this.getCategoriaById(this.id);
      },
      error: (e: Error) => {
        console.log(e.message);
      },
    });
  }
}
