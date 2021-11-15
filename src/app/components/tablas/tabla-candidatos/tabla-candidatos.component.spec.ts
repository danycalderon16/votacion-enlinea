import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaCandidatosComponent } from './tabla-candidatos.component';

describe('TablaCandidatosComponent', () => {
  let component: TablaCandidatosComponent;
  let fixture: ComponentFixture<TablaCandidatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaCandidatosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaCandidatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
