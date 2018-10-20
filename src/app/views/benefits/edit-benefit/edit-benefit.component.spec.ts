/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EditBenefitComponent } from './edit-benefit.component';

describe('EditBenefitComponent', () => {
  let component: EditBenefitComponent;
  let fixture: ComponentFixture<EditBenefitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditBenefitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBenefitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
