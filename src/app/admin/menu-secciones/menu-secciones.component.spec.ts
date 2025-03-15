import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuSeccionesComponent } from './menu-secciones.component';

describe('MenuSeccionesComponent', () => {
  let component: MenuSeccionesComponent;
  let fixture: ComponentFixture<MenuSeccionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuSeccionesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuSeccionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
