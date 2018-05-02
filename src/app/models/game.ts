import * as moment from 'moment';
import { setDefaultService } from 'selenium-webdriver/edge';

export class Game {
    id: string;
    board: string[];
    lastMoveOn: moment.Moment;
    firstPlayer: string;
    secondPlayer: string;
    winner: string;

    constructor(
        id: string,
        board: string[],
        lastMoveOn: moment.Moment,
        firstPlayer: string,
        secondPlayer: string,
        winner: string,
    ) {
        this.id = id;
        this.board = board;
        this.lastMoveOn = lastMoveOn;
        this.firstPlayer = firstPlayer;
        this.secondPlayer = secondPlayer;
        this.winner = winner;
    }
}
