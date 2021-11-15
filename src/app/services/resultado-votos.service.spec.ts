import { TestBed } from '@angular/core/testing';

import { ResultadoVotosService } from './resultado-votos.service';

describe('ResultadoVotosService', () => {
  let service: ResultadoVotosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResultadoVotosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
