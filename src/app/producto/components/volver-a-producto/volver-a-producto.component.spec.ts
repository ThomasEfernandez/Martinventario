import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolverAProductoComponent } from './volver-a-producto.component';

describe('VolverAProductoComponent', () => {
  let component: VolverAProductoComponent;
  let fixture: ComponentFixture<VolverAProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VolverAProductoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VolverAProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
