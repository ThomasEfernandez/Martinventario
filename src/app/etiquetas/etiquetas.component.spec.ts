import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtiquetasComponent } from './etiquetas.component';

describe('EtiquetasComponent', () => {
  let component: EtiquetasComponent;
  let fixture: ComponentFixture<EtiquetasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EtiquetasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EtiquetasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
