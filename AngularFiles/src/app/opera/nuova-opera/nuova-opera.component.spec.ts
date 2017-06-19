import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuovaOperaComponent } from './nuova-opera.component';

describe('NuovaOperaComponent', () => {
  let component: NuovaOperaComponent;
  let fixture: ComponentFixture<NuovaOperaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuovaOperaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuovaOperaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
