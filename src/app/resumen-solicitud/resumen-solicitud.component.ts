import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resumen-solicitud',
  templateUrl: './resumen-solicitud.component.html',
  styleUrls: ['./resumen-solicitud.component.css']
})
export class ResumenSolicitudComponent implements OnInit {

  porcentaje:string;
  constructor() { }

  ngOnInit() {
    this.porcentaje='resumenSolicitud';
  }

}
