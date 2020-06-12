import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
  }

  public onInfoClick(){
    Swal.fire({
      width: 1036,
      confirmButtonText:  '¡Entendido!',
      imageUrl: '../../assets/reqFacturacion.png',
      imageAlt: 'Imagen no disponible. Disculpe las molestias.',
      imageWidth: 1036,
      imageHeight: 413,
      animation: true
    })
  }
}
