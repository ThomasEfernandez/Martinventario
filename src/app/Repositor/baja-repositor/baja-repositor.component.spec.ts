import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BajaRepositorComponent } from './baja-repositor.component';

describe('BajaRepositorComponent', () => {
  let component: BajaRepositorComponent;
  let fixture: ComponentFixture<BajaRepositorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BajaRepositorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BajaRepositorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
