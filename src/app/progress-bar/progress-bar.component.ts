import { Component, OnInit, Input } from '@angular/core';
import { trigger, transition, state, animate, style, keyframes } from '@angular/animations'

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css'],
  animations: [
    trigger('porcentajeCompletado',[
      state('capturaSolicitud', style({ width:'33%' })),
      state('capturaTickets', style({ width: '66%', backgroundColor: '#23a7a2' })),
      state('resumenSolicitud', style({ width: '80%', backgroundColor:'#23a7a2' })),
      state('completado', style({ width: '100%', backgroundColor:'#52c765' })),

      transition('* => capturaSolicitud', [
        animate('1s',  keyframes([
          style({ width:'0%', backgroundColor:'white'}),
          style({ width:'33%', backgroundColor: '#4A90E2'})
        ])),
      ]),      
      transition('* => capturaTickets', [
        animate('1s', keyframes([
          style({ width:'33%'}),
          style({ width:'66%', backgroundColor:'#23a7a2'})
        ])),
      ]),      
      transition('* => resumenSolicitud', [
        animate('1s', keyframes([
          style({ width:'66%', backgroundColor:'#23a7a2'}),
          style({ width:'80%', backgroundColor:'#23a7a2'})
        ])),
      ]),      
      transition('* => completado', [
        animate('1s', keyframes([
          style({ width:'80%', backgroundColor:'#23a7a2'}),
          style({ width:'100%', backgroundColor:'#52c765'})
        ])),
      ]),      
    ])
  ]
})
export class ProgressBarComponent implements OnInit {

  @Input()
  porcentaje:string="";

  constructor() { }

  ngOnInit() {
    
    
  }

}
