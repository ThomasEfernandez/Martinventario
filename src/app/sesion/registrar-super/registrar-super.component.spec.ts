import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarSuperComponent } from './registrar-super.component';

describe('RegistrarSuperComponent', () => {
  let component: RegistrarSuperComponent;
  let fixture: ComponentFixture<RegistrarSuperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrarSuperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarSuperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
