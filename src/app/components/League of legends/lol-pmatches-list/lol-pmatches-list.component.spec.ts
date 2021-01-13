import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LolPmatchesListComponent } from './lol-pmatches-list.component';

describe('LolPmatchesListComponent', () => {
  let component: LolPmatchesListComponent;
  let fixture: ComponentFixture<LolPmatchesListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LolPmatchesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LolPmatchesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
