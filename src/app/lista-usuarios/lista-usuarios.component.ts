import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';
import { faSearch, faEllipsisH } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {

  iconoBuscar = faSearch;
  iconoDetalle = faEllipsisH;

  constructor() { }

  ngOnInit(): void {
  }

  VerDetalle(){
    swal.fire({
      title: ' Usuario #4',
      width: (window.innerWidth / 1.5),
      html:`
      <div class="row">
      <div class="col-lg-6 col-md-12 text-left">
          <span>Nombre: <b>Patricio Eduardo Escudero Parra</b></span>
      </div>
      <div class="col-lg-3 col-md-6 text-left">
          <span>RFC: <b>XXXX010203AB1</b></span>
      </div>
      <div class="col-lg-3 col-md-6 text-left">
          <span>Teléfono: <b>9221056183</b></span>
      </div>
      </div>
      <hr width="95%">
      <div class="row">
        <div class="col-lg-6 text-left">
            <span>Correo Electrónico: <b>correo@dominio.com.mx</b></span>
        </div>
      </div>
      <hr>
      <div class="row">
        <div class="col-lg-6 text-left">
            <span>Solicitudes Enviadas: <b>25</b></span>
        </div>
        <div class="col-lg-6 text-left">
            <span>Registrado en: <b>25/03/2020</b></span>
        </div>
      </div>
      `,
      showConfirmButton:false,
      showCloseButton: true,
      focusConfirm: false,
      
    });
  }
}
