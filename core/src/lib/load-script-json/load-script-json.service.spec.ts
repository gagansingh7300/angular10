// 9fbef606107a605d69c0edbcd8029e5d_SYMPHONY
import { TestBed } from '@angular/core/testing';

import { LoadScriptJsonService } from './load-script-json.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

describe('LoadScriptJsonService', () => {
  let service: LoadScriptJsonService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [LoadScriptJsonService],
    });
    service = TestBed.inject(LoadScriptJsonService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
