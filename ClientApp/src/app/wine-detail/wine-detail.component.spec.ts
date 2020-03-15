import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {WineDetailComponent} from './wine-detail.component';
import {WineRepository} from "../services/wine-repository.service";
import {ActivatedRoute} from "@angular/router";
import {of} from "rxjs";

describe('WineDetailComponent', () => {
  let component: WineDetailComponent;
  let fixture: ComponentFixture<WineDetailComponent>;

  const mockActivatedRoute = {
    params: of({id: 1})
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WineDetailComponent],
      providers: [WineRepository, {
        provide: ActivatedRoute,
        useValue: mockActivatedRoute
      }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WineDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
