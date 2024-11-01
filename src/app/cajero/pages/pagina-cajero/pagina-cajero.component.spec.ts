import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaCajeroComponent } from './pagina-cajero.component';

describe('PaginaCajeroComponent', () => {
  let component: PaginaCajeroComponent;
  let fixture: ComponentFixture<PaginaCajeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaCajeroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaCajeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
