import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentanaVotarComponent } from './ventana-votar.component';

describe('VentanaVotarComponent', () => {
  let component: VentanaVotarComponent;
  let fixture: ComponentFixture<VentanaVotarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VentanaVotarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VentanaVotarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
