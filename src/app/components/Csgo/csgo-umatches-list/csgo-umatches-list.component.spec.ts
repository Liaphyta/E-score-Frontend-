import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CsgoUmatchesListComponent } from './csgo-umatches-list.component';

describe('CsgoUmatchesListComponent', () => {
  let component: CsgoUmatchesListComponent;
  let fixture: ComponentFixture<CsgoUmatchesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CsgoUmatchesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsgoUmatchesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
