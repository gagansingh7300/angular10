// 9fbef606107a605d69c0edbcd8029e5d_SYMPHONY
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogisticsAppContainerComponent } from './logistics-container.component';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule, Store } from '@ngrx/store';
import { of } from 'rxjs';
import { provideMockStore } from '@ngrx/store/testing';

const initialState = {};

describe('LogisticsAppContainerComponent', () => {
  let component: LogisticsAppContainerComponent;
  let fixture: ComponentFixture<LogisticsAppContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, StoreModule.forRoot({})],
      declarations: [LogisticsAppContainerComponent],
      providers: [provideMockStore({ initialState })],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogisticsAppContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  afterEach(() => {
    fixture.destroy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
