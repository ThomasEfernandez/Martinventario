import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolverAAdminComponent } from './volver-a-admin.component';

describe('VolverAAdminComponent', () => {
  let component: VolverAAdminComponent;
  let fixture: ComponentFixture<VolverAAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VolverAAdminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VolverAAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
