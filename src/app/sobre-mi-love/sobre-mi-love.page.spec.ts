import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SobreMiLovePage } from './sobre-mi-love.page';

describe('SobreMiLovePage', () => {
  let component: SobreMiLovePage;
  let fixture: ComponentFixture<SobreMiLovePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SobreMiLovePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SobreMiLovePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
