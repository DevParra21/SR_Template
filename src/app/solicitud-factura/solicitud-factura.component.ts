import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solicitud-factura',
  templateUrl: './solicitud-factura.component.html',
  styleUrls: ['./solicitud-factura.component.css']
})
export class SolicitudFacturaComponent implements OnInit {

  porcentaje:string;

  constructor() { }

  ngOnInit() {
    this.porcentaje = 'capturaSolicitud';
  }

}
