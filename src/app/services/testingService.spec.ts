import * as moment from 'moment';
import { Game } from '../models/game';

export const testApiGames: Object[] = [
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

export const testGames: Game[] = [
    {
        id: '111',
        board: ['x', 'y', 'x', 'y', 'x', 'y', 'x', 'y', 'x'],
        lastMoveOn: moment('2017-04-19T20:50:27.9985325+00:00'),
        firstPlayer: 'x',
        secondPlayer: 'y',
        winner: 'x'
    },
    {
        id: '222',
        board: ['y', 'x', 'y', 'x', 'y', 'x', 'y', 'x', 'y'],
        lastMoveOn: moment('2018-04-19T20:50:27.9985325+00:00'),
        firstPlayer: 'y',
        secondPlayer: 'x',
        winner: 'y'
    }
];
