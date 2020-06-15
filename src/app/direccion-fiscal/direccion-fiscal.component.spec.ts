import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DireccionFiscalComponent } from './direccion-fiscal.component';

describe('DireccionFiscalComponent', () => {
  let component: DireccionFiscalComponent;
  let fixture: ComponentFixture<DireccionFiscalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DireccionFiscalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DireccionFiscalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
