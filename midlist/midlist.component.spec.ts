import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MidlistComponent } from './midlist.component';

describe('MidlistComponent', () => {
  let component: MidlistComponent;
  let fixture: ComponentFixture<MidlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MidlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MidlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
