import { Component, OnInit } from '@angular/core';
import { faCheck } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-solicitud-aceptada',
  templateUrl: './solicitud-aceptada.component.html',
  styleUrls: ['./solicitud-aceptada.component.css']
})
export class SolicitudAceptadaComponent implements OnInit {

  porcentaje:string='';
  check = faCheck;
  
  constructor() { }

  ngOnInit() {
    this.porcentaje='completado';
  }

}
