import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElencoAutoriComponent } from './elenco-autori.component';

describe('ElencoAutoriComponent', () => {
  let component: ElencoAutoriComponent;
  let fixture: ComponentFixture<ElencoAutoriComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElencoAutoriComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElencoAutoriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
