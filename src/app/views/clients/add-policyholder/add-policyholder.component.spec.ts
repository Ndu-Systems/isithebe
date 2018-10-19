/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AddPolicyholderComponent } from './add-policyholder.component';

describe('AddPolicyholderComponent', () => {
  let component: AddPolicyholderComponent;
  let fixture: ComponentFixture<AddPolicyholderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPolicyholderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPolicyholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
