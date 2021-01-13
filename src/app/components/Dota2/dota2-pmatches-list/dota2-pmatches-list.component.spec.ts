import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Dota2PmatchesListComponent } from './dota2-pmatches-list.component';

describe('Dota2PmatchesListComponent', () => {
  let component: Dota2PmatchesListComponent;
  let fixture: ComponentFixture<Dota2PmatchesListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ Dota2PmatchesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dota2PmatchesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
