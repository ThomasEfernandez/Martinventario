import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CajerosComponent } from './cajeros.component';

describe('CajerosComponent', () => {
  let component: CajerosComponent;
  let fixture: ComponentFixture<CajerosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CajerosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CajerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
