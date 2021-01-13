import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Dota2TournamentListComponent } from './dota2-tournament-list.component';

describe('Dota2TournamentListComponent', () => {
  let component: Dota2TournamentListComponent;
  let fixture: ComponentFixture<Dota2TournamentListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ Dota2TournamentListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dota2TournamentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
