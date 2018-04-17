import { Injectable } from '@angular/core';
import { Board } from '../models/board';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TicTacToeService {

  constructor(private httpClient: HttpClient) { }

  getBoard(id: string): Observable<Board> {
    return this.httpClient.post(environment.backendUrl + '/api/games', {id: id});
  }

}
