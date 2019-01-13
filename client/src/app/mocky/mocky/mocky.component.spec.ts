import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MockyComponent } from './mocky.component';

describe('MockyComponent', () => {
  let component: MockyComponent;
  let fixture: ComponentFixture<MockyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MockyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MockyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
