import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LolMatchesListComponent } from './lol-matches-list.component';

describe('LolMatchesListComponent', () => {
  let component: LolMatchesListComponent;
  let fixture: ComponentFixture<LolMatchesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LolMatchesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LolMatchesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
