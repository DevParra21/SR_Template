import { Component, OnInit } from '@angular/core';
import { faEllipsisH, faCheck } from '@fortawesome/free-solid-svg-icons';
import { NgxSpinnerService } from 'ngx-spinner'
import { NgxChartsModule } from '@swimlane/ngx-charts';
import swal from 'sweetalert2'

import { infoChart }  from './chart';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  public administrador: boolean = true;
  iconoDetalle = faEllipsisH;
  iconoCheck = faCheck;

  infoChart: any[];
  view: any[] = [700,400];

  colorScheme = {
    domain: ['#ffb66e', '#2ebf5c']
  };

  //chart options
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = false;
  showLegend: boolean = false;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Sucursales';
  showYAxisLabel: boolean = true;
  yAxisLabel: string = 'Solicitudes';

  constructor(private spinner: NgxSpinnerService) {
    Object.assign(this, {infoChart});
   }

  ngOnInit() {
    this.spinner.show();

    setTimeout(()=>{
      this.spinner.hide();
    },3000)
  }

  onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(infoChart)));
  }

  onActivate(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

  VerDetalle(){
    swal.fire({
      title: ' Factura #003244',
      width: 1000,
      html:`
      <div class="row">
      <div class="col-lg-6 text-left">
          <span>Razón Social: <b>Patricio Eduardo Escudero Parra</b></span>
      </div>
      <div class="col-lg-3">
          <span>RFC: <b>XXXX010203AB1</b></span>
      </div>
      <div class="col-lg-2">
          <span>Persona <b>FÍSICA</b></span>
      </div>
      </div>
      <hr width="95%">
      <div class="row">
        <div class="col-lg-6 text-left">
          <span>Calle: <b>Nombre de Calle</b></span>
        </div>
        <div class="col-lg-3 text-right">
          <span>No. Exterior: <b>1100-B</b></span>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-6 text-left">
          <span>Colonia: <b>Nombre de la Colonia</b></span>
        </div>
        <div class="col-lg-3 text-right">
          <span>Código Postal: <b>50000</b></span>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12 text-left">
          <span>Municipio: <b>San Pedro Garza García</b></span>
        </div>
      </div>
      <hr width="95%">
      <div class="row">
        <div class="col-lg-6 text-left">
            <span>Correo Electrónico: <b>correo@dominio.com.mx</b></span>
        </div>
        <div class="col-lg-6 text-left">
            <span>Uso de CFDI: <b>G01 - Gastos en General</b></span>
        </div>
      </div>
      <hr width="95%">
      <legend>Tickets Asociados</legend>
      <div class="form-group row">
          <div class="col-lg-12">
              <table class="table table-striped table-inverse">
                  <thead class="thead-inverse">
                      <tr>
                          <th>Fecha de Compra</th>
                          <th>Sucursal</th>
                          <th class="text-right">Número de Caja</th>
                          <th class="text-right">Número de Ticket</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr>
                          <td scope="row">Fecha</td>
                          <td>1 - Garza Sada</td>
                          <td class="text-right">2</td>
                          <td class="text-right">00121</td>
                      </tr>
                      <tr>
                          <td scope="row">Fecha</td>
                          <td>2 - Cumbres</td>
                          <td class="text-right">5</td>
                          <td class="text-right">00322</td>
                      </tr>
                  </tbody>
              </table>
          </div>
      </div>`,
      showConfirmButton:false,
      showCloseButton: true,
      focusConfirm: false,
      
    });
  }

}
