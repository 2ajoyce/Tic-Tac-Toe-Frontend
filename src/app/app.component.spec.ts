import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { NO_ERRORS_SCHEMA, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let app: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      schemas: [
        NO_ERRORS_SCHEMA
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement;
    fixture.detectChanges();
  }));

  it('should create the app', async(() => {
    expect(fixture.componentInstance).toBeTruthy();
  }));

  it('header', async(() => {
    expect(app.query(By.css('app-header'))).toBeTruthy();
  }));

  it('board', async(() => {
    expect(app.query(By.css('app-board'))).toBeTruthy();
  }));
});
