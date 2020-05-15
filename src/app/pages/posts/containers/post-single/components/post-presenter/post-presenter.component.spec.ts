import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostPresenterComponent } from './post-presenter.component';

describe('PostPresenterComponent', () => {
  let component: PostPresenterComponent;
  let fixture: ComponentFixture<PostPresenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostPresenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostPresenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
