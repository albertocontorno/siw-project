import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElencoOpereComponent } from './elenco-opere.component';

describe('ElencoOpereComponent', () => {
  let component: ElencoOpereComponent;
  let fixture: ComponentFixture<ElencoOpereComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElencoOpereComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElencoOpereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
