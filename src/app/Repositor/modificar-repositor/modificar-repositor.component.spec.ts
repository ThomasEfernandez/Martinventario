import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarRepositorComponent } from './modificar-repositor.component';

describe('ModificarRepositorComponent', () => {
  let component: ModificarRepositorComponent;
  let fixture: ComponentFixture<ModificarRepositorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModificarRepositorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModificarRepositorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
