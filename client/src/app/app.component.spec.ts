import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { App.ComponentComponent } from './app.component.component';

describe('App.ComponentComponent', () => {
  let component: App.ComponentComponent;
  let fixture: ComponentFixture<App.ComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ App.ComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(App.ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
