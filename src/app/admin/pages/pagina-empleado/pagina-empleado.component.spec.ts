import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaEmpleadoComponent } from './pagina-empleado.component';

describe('PaginaEmpleadoComponent', () => {
  let component: PaginaEmpleadoComponent;
  let fixture: ComponentFixture<PaginaEmpleadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaEmpleadoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaEmpleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
