import { Component, OnInit } from '@angular/core';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-resumen-solicitud',
  templateUrl: './resumen-solicitud.component.html',
  styleUrls: ['./resumen-solicitud.component.css']
})
export class ResumenSolicitudComponent implements OnInit {

  porcentaje:string;

  iconoEliminar = faTrashAlt;

  constructor() { }

  ngOnInit() {
    this.porcentaje='resumenSolicitud';
  }

}
