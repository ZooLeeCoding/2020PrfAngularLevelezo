import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GyermekPeldaComponent } from './gyermek-pelda.component';

describe('GyermekPeldaComponent', () => {
  let component: GyermekPeldaComponent;
  let fixture: ComponentFixture<GyermekPeldaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GyermekPeldaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GyermekPeldaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
