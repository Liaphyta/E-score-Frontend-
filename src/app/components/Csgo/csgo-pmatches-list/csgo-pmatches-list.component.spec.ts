import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CsgoPmatchesListComponent } from './csgo-pmatches-list.component';

describe('CsgoPmatchesListComponent', () => {
  let component: CsgoPmatchesListComponent;
  let fixture: ComponentFixture<CsgoPmatchesListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CsgoPmatchesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsgoPmatchesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
