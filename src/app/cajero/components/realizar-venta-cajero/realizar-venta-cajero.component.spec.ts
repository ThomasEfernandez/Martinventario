import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealizarVentaCajeroComponent } from './realizar-venta-cajero.component';

describe('RealizarVentaCajeroComponent', () => {
  let component: RealizarVentaCajeroComponent;
  let fixture: ComponentFixture<RealizarVentaCajeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RealizarVentaCajeroComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(RealizarVentaCajeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
