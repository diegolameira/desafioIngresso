/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PremiereComponent } from './premiere.component';

describe('PremiereComponent', () => {
  let component: PremiereComponent;
  let fixture: ComponentFixture<PremiereComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PremiereComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PremiereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
