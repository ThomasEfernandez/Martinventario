import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaPedidoComponent } from './pagina-pedido.component';

describe('PaginaPedidoComponent', () => {
  let component: PaginaPedidoComponent;
  let fixture: ComponentFixture<PaginaPedidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaPedidoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaPedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
