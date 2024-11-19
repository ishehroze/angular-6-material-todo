import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonesComponent } from './dones.component';

describe('DonesComponent', () => {
  let component: DonesComponent;
  let fixture: ComponentFixture<DonesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
