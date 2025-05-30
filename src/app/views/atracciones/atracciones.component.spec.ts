import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtraccionesComponent } from './atracciones.component';

describe('AtraccionesComponent', () => {
  let component: AtraccionesComponent;
  let fixture: ComponentFixture<AtraccionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtraccionesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AtraccionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
