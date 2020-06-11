import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumenSolicitudComponent } from './resumen-solicitud.component';

describe('ResumenSolicitudComponent', () => {
  let component: ResumenSolicitudComponent;
  let fixture: ComponentFixture<ResumenSolicitudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumenSolicitudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumenSolicitudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
