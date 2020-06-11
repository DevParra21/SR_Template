import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudAceptadaComponent } from './solicitud-aceptada.component';

describe('SolicitudAceptadaComponent', () => {
  let component: SolicitudAceptadaComponent;
  let fixture: ComponentFixture<SolicitudAceptadaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolicitudAceptadaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitudAceptadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
