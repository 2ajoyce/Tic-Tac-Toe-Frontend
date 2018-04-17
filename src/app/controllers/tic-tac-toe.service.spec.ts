import { TestBed, inject, async } from '@angular/core/testing';

import { TicTacToeService } from './tic-tac-toe.service';
import { HttpClientModule, HttpClient, HttpRequest } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Mock } from 'protractor/built/driverProviders';
import { environment } from '../../environments/environment';
import { equal } from 'assert';
import { Board } from '../models/board';

describe('TicTacToeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        HttpClientTestingModule
      ],
      providers: [TicTacToeService]
    });
  });

  it('should be created', inject([TicTacToeService], (service: TicTacToeService) => {
    expect(service).toBeTruthy();
  }));

  describe('getBoard', () => {
    it('should retrieve board from api', async(inject([
      TicTacToeService,
      HttpClient,
      HttpTestingController
    ], (
      service: TicTacToeService,
      http: HttpClient,
      backend: HttpTestingController
    ) => {
        service.getBoard('321').subscribe(result => {
          expect(result).toBeNull();
        });

        backend.expectOne((req: HttpRequest<any>) => {
          return req.method === 'POST'
            && req.url === environment.backendUrl + '/api/games'
            && req.body.id === '321';
        }).flush(null, { status: 200, statusText: 'Ok' });

      })));
  });
});
