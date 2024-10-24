import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepositoresComponent } from './repositores.component';

describe('RepositoresComponent', () => {
  let component: RepositoresComponent;
  let fixture: ComponentFixture<RepositoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RepositoresComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RepositoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
