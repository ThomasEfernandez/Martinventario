import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarCategoriaComponent } from './eliminar-categoria.component';

describe('EliminarCategoriaComponent', () => {
  let component: EliminarCategoriaComponent;
  let fixture: ComponentFixture<EliminarCategoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EliminarCategoriaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
