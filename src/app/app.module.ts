import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoArgProgramaComponent } from './components/nav-logos-cruza/logo-arg-programa.component';
import { BannerComponent } from './components/banner/banner.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { EntradasComponent } from './components/entradas/entradas.component';
import { EduComponent } from './components/platoprincipal/edu.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { interceptorProvider } from './service/interceptor-service';
import { NewEntradasComponent } from './components/entradas/new-entradas.component';
import { EditEntradasComponent } from './components/entradas/edit-entradas.component';
import { NeweducacionComponent } from './components/platoprincipal/neweducacion.component';
import { EditeducacionComponent } from './components/platoprincipal/editeducacion.component';
import { EditAcercaDeComponent } from './components/acerca-de/edit-acerca-de.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ForgotCodComponent } from './components/forgot-cod/forgot-cod.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { SkillsComponent } from './components/bebidas/skills.component';
import { EditSkillComponent } from './components/bebidas/edit-skills.component';
import { NewSkillComponent } from './components/bebidas/new-skills.component';
import { UbicacionComponent } from './components/ubicacion/ubicacion.component';
import { PedidosComponent } from './components/pedidos/pedidos.component';
import { NuevoPedidoComponent } from './components/pedidos/nuevo-pedido.component';
import { HorariosComponent } from './components/horarios/horarios.component';
import { EditpedidosComponent } from './components/pedidos/editpedidos.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ResenasComponent } from './components/resenas/resenas.component';
import { ReservasComponent } from './components/reservas/reservas.component';
import { NuevaReservaComponent } from './components/reservas/nueva-reserva.component';
import { PedidosAdminComponent } from './components/pedidos/pedidos-admin.component';
import { InfoDashboardComponent } from './components/info-dashboard/info-dashboard.component';
import { IngresosComponent } from './components/ingresos/ingresos.component';
import {NuevoIngresoComponent } from './components/ingresos/nuevo-ingreso.component';
import { EdipedidospreparandoComponent } from './components/pedidos/edipedidospreparando.component';
import { EmpleadosComponent } from './components/empleados/empleados.component';
import { NuevoEmpleadoComponent } from './components/empleados/nuevo-empleado.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoArgProgramaComponent,
    BannerComponent,
    AcercaDeComponent,
    EntradasComponent,
    EduComponent,
    ProyectosComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    NewEntradasComponent,
    EditEntradasComponent,
    SkillsComponent,
    EditSkillComponent,
    NewSkillComponent,
    NeweducacionComponent,
    EditeducacionComponent,
    EditAcercaDeComponent,
    NotFoundComponent,
    ForgotPasswordComponent,
    ForgotCodComponent,
    ResetPasswordComponent,
    UbicacionComponent,
    PedidosComponent,
    NuevoPedidoComponent,
    HorariosComponent,
    EditpedidosComponent,
    DashboardComponent,
    ResenasComponent,
    ReservasComponent,
    NuevaReservaComponent,
    PedidosAdminComponent,
    InfoDashboardComponent,
    IngresosComponent,
    NuevoIngresoComponent,
    EdipedidospreparandoComponent,
    EmpleadosComponent,
    NuevoEmpleadoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule,
    FormsModule
  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }