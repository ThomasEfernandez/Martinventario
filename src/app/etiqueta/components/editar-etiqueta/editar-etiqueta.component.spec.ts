import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarEtiquetaComponent } from './editar-etiqueta.component';

describe('EditarEtiquetaComponent', () => {
  let component: EditarEtiquetaComponent;
  let fixture: ComponentFixture<EditarEtiquetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarEtiquetaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarEtiquetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
