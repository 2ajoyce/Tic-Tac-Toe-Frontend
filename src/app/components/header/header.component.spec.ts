import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { TicTacToeService } from '../../services/tic-tac-toe.service';
import { By } from '@angular/platform-browser';
import { Subject } from 'rxjs/Subject';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      providers: [{ provide: TicTacToeService, useClass: MockTicTacToeService }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('p', inject([TicTacToeService], (service: MockTicTacToeService) => {
    service.changeGameCount(1);
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('p')).nativeElement.textContent.trim())
      .toEqual('header works! (There are 1 games)');
  }));
});

class MockTicTacToeService {
  gameCount: Subject<number> = new Subject<number>();
  getAllGames() {
    return this.gameCount;
  }

  changeGameCount(n: number) {
    this.gameCount.next(n);
  }
}
