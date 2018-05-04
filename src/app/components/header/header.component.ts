import { Component, OnInit } from '@angular/core';
import { TicTacToeService } from '../../services/tic-tac-toe.service';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  gameCount = 0;

  constructor(private ticTacToeService: TicTacToeService) { }

  ngOnInit() {
    this.ticTacToeService.getAllGames().subscribe(count => {
      this.gameCount = count;
    });
  }
}
