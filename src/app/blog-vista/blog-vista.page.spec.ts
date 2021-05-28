import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogVistaPage } from './blog-vista.page';

describe('BlogVistaPage', () => {
  let component: BlogVistaPage;
  let fixture: ComponentFixture<BlogVistaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogVistaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogVistaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
