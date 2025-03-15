import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaSeccionesComponent } from './pagina-secciones.component';

describe('PaginaSeccionesComponent', () => {
  let component: PaginaSeccionesComponent;
  let fixture: ComponentFixture<PaginaSeccionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaSeccionesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaSeccionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
