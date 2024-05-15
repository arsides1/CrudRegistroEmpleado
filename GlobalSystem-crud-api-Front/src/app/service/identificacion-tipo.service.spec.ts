import { TestBed } from '@angular/core/testing';

import { IdentificacionTipoService } from './identificacion-tipo.service';

describe('IdentificacionTipoService', () => {
  let service: IdentificacionTipoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IdentificacionTipoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
