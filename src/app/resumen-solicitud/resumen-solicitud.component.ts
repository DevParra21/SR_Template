import { Component, OnInit } from '@angular/core';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { NgxSpinnerService } from 'ngx-spinner'

@Component({
  selector: 'app-resumen-solicitud',
  templateUrl: './resumen-solicitud.component.html',
  styleUrls: ['./resumen-solicitud.component.css']
})
export class ResumenSolicitudComponent implements OnInit {

  porcentaje:string;

  iconoEliminar = faTrashAlt;
  private spinner:NgxSpinnerService;

  constructor() { }

  ngOnInit() {
    this.porcentaje='resumenSolicitud';
  }



    
  

}
