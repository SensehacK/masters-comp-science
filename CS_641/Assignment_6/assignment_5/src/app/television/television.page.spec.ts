import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelevisionPage } from './television.page';

describe('TelevisionPage', () => {
  let component: TelevisionPage;
  let fixture: ComponentFixture<TelevisionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelevisionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelevisionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
