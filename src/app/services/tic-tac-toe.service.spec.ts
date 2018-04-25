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

    const boards: Object[] = [
      {
        id: '111',
        board: ['x', 'y', 'x', 'y', 'x', 'y', 'x', 'y', 'x'],
        lastMoveOn: '2017-04-19T20:50:27.9985325+00:00',
        firstPlayer: 'x',
        secondPlayer: 'y',
        winner: 'x'
      },
      {
        id: '222',
        board: ['y', 'x', 'y', 'x', 'y', 'x', 'y', 'x', 'y'],
        lastMoveOn: '2018-04-19T20:50:27.9985325+00:00',
        firstPlayer: 'y',
        secondPlayer: 'x',
        winner: 'y'
      }
    ];

    it('getBoard', async(inject([
      TicTacToeService,
      HttpClient,
      HttpTestingController
    ], (
      service: TicTacToeService,
      http: HttpClient,
      backend: HttpTestingController
    ) => {
        boards.forEach(board => {
          service.getBoard('321').subscribe(result => {
            expect(result.toString).toEqual(board.toString);
          });

          backend.expectOne((req: HttpRequest<any>) => {
            return req.method === 'POST'
              && req.url === environment.backendUrl + '/api/games'
              && req.body.id === '321';
          }).flush(board, { status: 200, statusText: 'Ok' });
        });
      })));

    it('createBoard', async(inject([
      TicTacToeService,
      HttpClient,
      HttpTestingController
    ], (
      service: TicTacToeService,
      http: HttpClient,
      backend: HttpTestingController
    ) => {
        boards.forEach(board => {
          service.createBoard('x').subscribe(result => {
            expect(result.toString).toEqual(board.toString);
          });

          backend.expectOne((req: HttpRequest<any>) => {
            return req.method === 'POST'
              && req.url === environment.backendUrl + '/api/games/start'
              && req.body.player === 'x';
          }).flush(board, { status: 200, statusText: 'Ok' });
        });
      })));

    it('getAllBoards', async(inject([
      TicTacToeService,
      HttpClient,
      HttpTestingController
    ], (
      service: TicTacToeService,
      http: HttpClient,
      backend: HttpTestingController
    ) => {
        service.getAllBoards().subscribe(result => {
          expect(result).toEqual(4);
        });

        backend.expectOne((req: HttpRequest<any>) => {
          return req.method === 'GET'
            && req.url === environment.backendUrl + '/api/games';
        }).flush(4, { status: 200, statusText: 'Ok' });
      })));
  });
