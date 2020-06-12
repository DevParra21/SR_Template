import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solicitud-aceptada',
  templateUrl: './solicitud-aceptada.component.html',
  styleUrls: ['./solicitud-aceptada.component.css']
})
export class SolicitudAceptadaComponent implements OnInit {

  porcentaje:string='';
  constructor() { }

  ngOnInit() {
    this.porcentaje='completado';
  }

}
