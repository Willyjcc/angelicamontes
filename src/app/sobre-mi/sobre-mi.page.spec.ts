import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SobreMiPage } from './sobre-mi.page';

describe('SobreMiPage', () => {
  let component: SobreMiPage;
  let fixture: ComponentFixture<SobreMiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SobreMiPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SobreMiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
