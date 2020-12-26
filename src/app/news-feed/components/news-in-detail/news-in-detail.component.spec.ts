import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsInDetailComponent } from './news-in-detail.component';

describe('NewsInDetailComponent', () => {
  let component: NewsInDetailComponent;
  let fixture: ComponentFixture<NewsInDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsInDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsInDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
