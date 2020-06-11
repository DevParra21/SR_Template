import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudFacturaComponent } from './solicitud-factura.component';

describe('SolicitudFacturaComponent', () => {
  let component: SolicitudFacturaComponent;
  let fixture: ComponentFixture<SolicitudFacturaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolicitudFacturaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitudFacturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
