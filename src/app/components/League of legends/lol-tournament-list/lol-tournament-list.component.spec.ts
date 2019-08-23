import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LolTournamentListComponent } from './lol-tournament-list.component';

describe('LolTournamentListComponent', () => {
  let component: LolTournamentListComponent;
  let fixture: ComponentFixture<LolTournamentListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LolTournamentListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LolTournamentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
