import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDetailsCastComponent } from './show-details-cast.component';

describe('ShowDetailsCastComponent', () => {
  let component: ShowDetailsCastComponent;
  let fixture: ComponentFixture<ShowDetailsCastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowDetailsCastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDetailsCastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
