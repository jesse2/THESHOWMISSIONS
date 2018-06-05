import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImmortalsComponent } from './immortals.component';

describe('ImmortalsComponent', () => {
  let component: ImmortalsComponent;
  let fixture: ComponentFixture<ImmortalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImmortalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImmortalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
