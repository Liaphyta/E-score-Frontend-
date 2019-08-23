import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Dota2UmatchesListComponent } from './dota2-umatches-list.component';

describe('Dota2UmatchesListComponent', () => {
  let component: Dota2UmatchesListComponent;
  let fixture: ComponentFixture<Dota2UmatchesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dota2UmatchesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dota2UmatchesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
