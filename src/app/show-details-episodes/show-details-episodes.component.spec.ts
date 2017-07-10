import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDetailsEpisodesComponent } from './show-details-episodes.component';

describe('ShowDetailsEpisodesComponent', () => {
  let component: ShowDetailsEpisodesComponent;
  let fixture: ComponentFixture<ShowDetailsEpisodesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowDetailsEpisodesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDetailsEpisodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
