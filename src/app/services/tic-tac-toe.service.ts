import { Injectable } from '@angular/core';
import { Board } from '../models/board';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/Observable';

import * as moment from 'moment';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class TicTacToeService {

  constructor(private httpClient: HttpClient) { }

  getBoard(id: string): Subject<Board> {
    const response: Observable<any> = this.httpClient.post(environment.backendUrl + '/api/games', { id: id });
    const result: Subject<Board> = new Subject;

    response.subscribe(r => {
      result.next(new Board(
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
