import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuProductoComponent } from './menu-producto.component';

describe('MenuProductoComponent', () => {
  let component: MenuProductoComponent;
  let fixture: ComponentFixture<MenuProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuProductoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
