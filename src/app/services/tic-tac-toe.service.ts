import { Injectable } from '@angular/core';
import { Game } from '../models/game';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/Observable';

import * as moment from 'moment';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class TicTacToeService {

  constructor(private httpClient: HttpClient) { }

  getGame(id: string): Subject<Game> {
    const response: Observable<any> = this.httpClient.post(environment.backendUrl + '/api/games', { id: id });
    const result: Subject<Game> = new Subject;

    response.subscribe(r => {
      result.next(new Game(
        r.id,
        r.board,
        moment(r.lastMoveOn),
        r.firstPlayer,
        r.secondPlayer,
        r.winner
      ));
    });

    return result;
  }

  createGame(player: string): Subject<Game> {
    const response: Observable<any> = this.httpClient.post(environment.backendUrl + '/api/games/start', { player: player });
    const result: Subject<Game> = new Subject;

    response.subscribe(r => {
      result.next(new Game(
        r.id,
        r.board,
        moment(r.lastMoveOn),
        r.firstPlayer,
        r.secondPlayer,
        r.winner
      ));
    });

    return result;
  }

  getAllGames(): Subject<number> {
    const response: Observable<any> = this.httpClient.get(environment.backendUrl + '/api/games');
    const result: Subject<number> = new Subject;

    response.subscribe(r => {
      result.next(r);
    });

    return result;
  }

  joinGame(player: string, gameId?: string): Subject<Game> {
    const body: any = { player: player };
    if (gameId) { body.gameId = gameId; }

    const response: Observable<any> = this.httpClient.post(environment.backendUrl + '/api/games/join', body);
    const result: Subject<Game> = new Subject;

    response.subscribe(r => {
      result.next(new Game(
        r.id,
        r.board,
        moment(r.lastMoveOn),
        r.firstPlayer,
        r.secondPlayer,
        r.winner
      ));
    });

    return result;
  }
}
