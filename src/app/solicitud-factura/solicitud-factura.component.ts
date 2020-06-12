import { Component, OnInit } from '@angular/core';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-solicitud-factura',
  templateUrl: './solicitud-factura.component.html',
  styleUrls: ['./solicitud-factura.component.css']
})
export class SolicitudFacturaComponent implements OnInit {

  porcentaje:string;
  
  iconoContinuar = faArrowRight;

  constructor() { }

  ngOnInit() {
    this.porcentaje = 'capturaSolicitud';
  }

}
