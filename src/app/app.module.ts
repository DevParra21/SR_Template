import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { InicioComponent } from './inicio/inicio.component';
import { RegistroComponent } from './registro/registro.component';
import { PrincipalComponent } from './principal/principal.component';
import { PerfilComponent } from './perfil/perfil.component';
import { SolicitudFacturaComponent } from './solicitud-factura/solicitud-factura.component';
import { RegistroTicketComponent } from './registro-ticket/registro-ticket.component';
import { ResumenSolicitudComponent } from './resumen-solicitud/resumen-solicitud.component';
import { SolicitudAceptadaComponent } from './solicitud-aceptada/solicitud-aceptada.component';

const routes: Routes = [
  {path: '', redirectTo: '/inicio', pathMatch:'full'},
  {path: 'inicio', component: InicioComponent},
  {path: 'registro', component: RegistroComponent },
  {path: 'principal', component: PrincipalComponent},
  {path: 'perfil', component: PerfilComponent},
  {path: 'nueva-solicitud', component: SolicitudFacturaComponent},
  {path: 'registro-ticket', component: RegistroTicketComponent},
  {path: 'resumen', component: ResumenSolicitudComponent},
  {path: 'solicitud-finalizada', component: SolicitudAceptadaComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    InicioComponent,
    RegistroComponent,
    PrincipalComponent,
    PerfilComponent,
    SolicitudFacturaComponent,
    RegistroTicketComponent,
    ResumenSolicitudComponent,
    SolicitudAceptadaComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }