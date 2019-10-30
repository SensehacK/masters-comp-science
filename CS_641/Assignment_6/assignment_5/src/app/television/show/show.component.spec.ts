import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowComponent } from './show.component';

describe('ShowComponent', () => {
  let component: ShowComponent;
  let fixture: ComponentFixture<ShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
