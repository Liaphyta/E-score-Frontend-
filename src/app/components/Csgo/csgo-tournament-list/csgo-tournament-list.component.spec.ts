import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CsgoTournamentListComponent } from './csgo-tournament-list.component';

describe('CsgoTournamentListComponent', () => {
  let component: CsgoTournamentListComponent;
  let fixture: ComponentFixture<CsgoTournamentListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CsgoTournamentListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsgoTournamentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
