import { TestBed } from '@angular/core/testing';

import { ImovelService } from './imovel.service';

describe('CasasService', () => {
  let service: ImovelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImovelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
