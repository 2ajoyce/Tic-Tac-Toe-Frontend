import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BoardComponent } from './components/board/board.component';
import { TicTacToeService } from './services/tic-tac-toe.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BoardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    TicTacToeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
