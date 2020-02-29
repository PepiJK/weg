import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {WineNewComponent} from './wine-new.component';
import {WineRepository} from "../services/wine-repository.service";
import {FormBuilder, ReactiveFormsModule} from "@angular/forms";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatNativeDateModule} from "@angular/material/core";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";


describe('WineNewComponent', () => {
  let component: WineNewComponent;
  let fixture: ComponentFixture<WineNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatDatepickerModule, MatInputModule, MatButtonModule, ReactiveFormsModule, MatCardModule, MatNativeDateModule, BrowserAnimationsModule],
      declarations: [WineNewComponent],
      providers: [WineRepository, FormBuilder]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WineNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be invalid when inputs are invalid', () => {
    component.wineForm.patchValue({
      title: '',
      producer: '',
      type: '',
      harvest: '',
      price: '',
      description: ''
    });

    expect(component.wineForm.valid).toBe(false);
  });

  it('should be valid when inputs are valid', () => {
    component.wineForm.patchValue({
      title: 'New Wine',
      producer: 'Koch',
      type: 'Weißwein',
      harvest: new Date(),
      price: 8.99,
      description: ''
    });

    expect(component.wineForm.valid).toBe(true);
  });
});
