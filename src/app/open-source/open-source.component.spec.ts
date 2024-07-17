import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenSourceComponent } from './open-source.component';

describe('OpenSourceComponent', () => {
  let component: OpenSourceComponent;
  let fixture: ComponentFixture<OpenSourceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OpenSourceComponent]
    });
    fixture = TestBed.createComponent(OpenSourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
