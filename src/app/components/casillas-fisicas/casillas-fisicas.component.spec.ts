import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasillasFisicasComponent } from './casillas-fisicas.component';

describe('CasillasFisicasComponent', () => {
  let component: CasillasFisicasComponent;
  let fixture: ComponentFixture<CasillasFisicasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CasillasFisicasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CasillasFisicasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
