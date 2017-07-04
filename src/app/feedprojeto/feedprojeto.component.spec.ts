import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedprojetoComponent } from './feedprojeto.component';

describe('FeedprojetoComponent', () => {
  let component: FeedprojetoComponent;
  let fixture: ComponentFixture<FeedprojetoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedprojetoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedprojetoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
