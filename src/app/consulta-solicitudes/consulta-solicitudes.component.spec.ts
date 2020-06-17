import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaSolicitudesComponent } from './consulta-solicitudes.component';

describe('ConsultaSolicitudesComponent', () => {
  let component: ConsultaSolicitudesComponent;
  let fixture: ComponentFixture<ConsultaSolicitudesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultaSolicitudesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaSolicitudesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
