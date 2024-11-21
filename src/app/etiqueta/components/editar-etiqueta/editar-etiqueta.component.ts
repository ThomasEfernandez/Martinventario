import { Etiqueta } from 'app/etiqueta/interfaces/etiqueta.interface';
import { Component,inject,Input } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Categoria } from 'app/categoria/interfaces/categoria-inteface';
import { CategoriaService } from 'app/categoria/services/categoria.service';

@Component({
  selector: 'app-editar-etiqueta',
  standalone: true,
  imports: [ReactiveFormsModule,RouterModule],
  templateUrl: './editar-etiqueta.component.html',
  styleUrl: './editar-etiqueta.component.css'
})

export class EditarEtiquetaComponent {
  @Input() tipo : string='';

  router = inject(Router)
  fb = inject(FormBuilder)
  categoriaService = inject(CategoriaService)

  formulario = this.fb.nonNullable.group({
    id:[''],
    nombreEtiqueta: ['',[Validators.required,Validators.minLength(3)]],
    estado:[true,Validators.required],

  });

  getEtiquetasById (idCategoria:string |null,idEtiqueta:string|null){
    //Traigo todas las categorias y busco la etiqueta a modificar
    this.categoriaService.getCategoriaById(idCategoria).subscribe({
      next:(categoria:Categoria)=>{
          categoria.etiquetas.forEach(etiqueta => {
            if(etiqueta.id == idEtiqueta){
                this.formulario.controls['id'].setValue(etiqueta.id);
                this.formulario.controls['nombreEtiqueta'].setValue(etiqueta.nombreEtiqueta);
                this.formulario.controls['estado'].setValue(etiqueta.estado);
              return; //calculo que esto corta con la iteracion de los foreach, sino sacar.
              }
            
          
        });


      },
      error:(e:Error)=>{
        console.log(e.message);
        
      }
    })
  }
actualizarEtiqueta (idCategoria:string|null){
  if(this.formulario.invalid)return;
  this.categoriaService.getCategoriaById(idCategoria).subscribe({
    next:(categoria:Categoria)=>{
        categoria.etiquetas.forEach(etiqueta => {

          if (etiqueta.id === this.formulario.getRawValue().id){
            etiqueta  = this.formulario.getRawValue();

            this.categoriaService.putCategoria(categoria.id,categoria).subscribe({

              next:()=>{
                console.log('etiqueta actualizada...');
                
              },error:(e:Error)=>{
                console.log(e.message);
                
              }
            })

          }
          
        });

      }

  })
 



}



}
