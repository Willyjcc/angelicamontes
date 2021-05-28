import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SobreMiWorkPage } from './sobre-mi-work.page';

describe('SobreMiWorkPage', () => {
  let component: SobreMiWorkPage;
  let fixture: ComponentFixture<SobreMiWorkPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SobreMiWorkPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SobreMiWorkPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
