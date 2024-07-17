import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroicComponent } from './heroic.component';

describe('HeroicComponent', () => {
  let component: HeroicComponent;
  let fixture: ComponentFixture<HeroicComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeroicComponent]
    });
    fixture = TestBed.createComponent(HeroicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
