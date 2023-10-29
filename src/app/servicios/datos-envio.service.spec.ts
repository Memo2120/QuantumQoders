import { TestBed } from '@angular/core/testing';

import { DatosEnvioService } from './datos-envio.service';

describe('DatosEnvioService', () => {
  let service: DatosEnvioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatosEnvioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
