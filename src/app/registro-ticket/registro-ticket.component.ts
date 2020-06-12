import { Component, OnInit } from '@angular/core';
import { faTrashAlt, faSortDown, faArrowRight } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-registro-ticket',
  templateUrl: './registro-ticket.component.html',
  styleUrls: ['./registro-ticket.component.css']
})
export class RegistroTicketComponent implements OnInit {

  
  porcentaje:string;
  
  iconoEliminar = faTrashAlt;
  iconoGuardarTicket = faSortDown;
  iconoContinuar = faArrowRight;
  
  constructor() { }

  ngOnInit() {
    this.porcentaje='capturaTickets';
  }

}
