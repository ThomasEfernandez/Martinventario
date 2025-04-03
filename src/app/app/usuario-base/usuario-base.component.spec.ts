import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioBaseComponent } from './usuario-base.component';

describe('UsuarioBaseComponent', () => {
  let component: UsuarioBaseComponent;
  let fixture: ComponentFixture<UsuarioBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsuarioBaseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsuarioBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
