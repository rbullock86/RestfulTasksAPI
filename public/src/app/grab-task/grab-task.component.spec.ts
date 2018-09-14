import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrabTaskComponent } from './grab-task.component';

describe('GrabTaskComponent', () => {
  let component: GrabTaskComponent;
  let fixture: ComponentFixture<GrabTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrabTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrabTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
