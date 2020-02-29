import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {WineListComponent} from './wine-list.component';
import {WineRepository} from "../services/wine-repository.service";

describe('WineListComponent', () => {
  let component: WineListComponent;
  let fixture: ComponentFixture<WineListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WineListComponent],
      providers: [WineRepository]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WineListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
