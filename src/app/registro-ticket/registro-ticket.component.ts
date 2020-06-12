import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro-ticket',
  templateUrl: './registro-ticket.component.html',
  styleUrls: ['./registro-ticket.component.css']
})
export class RegistroTicketComponent implements OnInit {

  
  porcentaje:string;

  constructor() { }

  ngOnInit() {
    this.porcentaje='capturaTickets';
  }

}
