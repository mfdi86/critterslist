import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C4cComponent } from './c4c.component';

describe('C4cComponent', () => {
  let component: C4cComponent;
  let fixture: ComponentFixture<C4cComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C4cComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C4cComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
