import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LolUMatchesListComponent } from './lol-umatches-list.component';

describe('LolMatchesListComponent', () => {
  let component: LolUMatchesListComponent;
  let fixture: ComponentFixture<LolUMatchesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LolUMatchesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LolUMatchesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
