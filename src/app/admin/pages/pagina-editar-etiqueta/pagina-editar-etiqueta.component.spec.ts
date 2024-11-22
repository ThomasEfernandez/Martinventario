import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaEditarEtiquetaComponent } from './pagina-editar-etiqueta.component';

describe('PaginaEditarEtiquetaComponent', () => {
  let component: PaginaEditarEtiquetaComponent;
  let fixture: ComponentFixture<PaginaEditarEtiquetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaEditarEtiquetaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaEditarEtiquetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
