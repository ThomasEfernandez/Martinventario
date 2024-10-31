import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaAgregarProductoComponent } from './pagina-agregar-producto.component';

describe('PaginaAgregarProductoComponent', () => {
  let component: PaginaAgregarProductoComponent;
  let fixture: ComponentFixture<PaginaAgregarProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaAgregarProductoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaAgregarProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
