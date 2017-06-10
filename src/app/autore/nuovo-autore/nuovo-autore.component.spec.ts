import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuovoAutoreComponent } from './nuovo-autore.component';

describe('NuovoAutoreComponent', () => {
  let component: NuovoAutoreComponent;
  let fixture: ComponentFixture<NuovoAutoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuovoAutoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuovoAutoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
