import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NewEntradasComponent } from './components/entradas/new-entradas.component';
import { EditEntradasComponent } from './components/entradas/edit-entradas.component';
import { NeweducacionComponent } from './components/platoprincipal/neweducacion.component';
import { EditeducacionComponent } from './components/platoprincipal/editeducacion.component';
import { EditSkillComponent } from './components/bebidas/edit-skills.component';
import { NewSkillComponent } from './components/bebidas/new-skills.component';
import { EditAcercaDeComponent } from './components/acerca-de/edit-acerca-de.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ForgotCodComponent } from './components/forgot-cod/forgot-cod.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { PedidosComponent } from './components/pedidos/pedidos.component';
import { NuevoPedidoComponent } from './components/pedidos/nuevo-pedido.component';
import { EditpedidosComponent } from './components/pedidos/editpedidos.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  {path:'',component: HomeComponent},
  {path:'login',component: LoginComponent},
  {path:'nuevaEntrada', component: NewEntradasComponent},
  {path:'editEntrada/:id', component: EditEntradasComponent},
  {path:'nuevoPlato', component: NeweducacionComponent},
  {path:'editPlato/:id', component: EditeducacionComponent},
  {path: 'reset-password', component:ResetPasswordComponent},
  {path: 'forgot-password', component: ForgotPasswordComponent},
  {path: 'forgot-cod', component: ForgotCodComponent},
  { path: 'nuevaBebida', component: NewSkillComponent},
  { path: 'editBebida/:id', component: EditSkillComponent},
  { path: 'editacercade/:id', component: EditAcercaDeComponent},
  { path: 'pedidos', component: PedidosComponent },
  { path: 'pedidos/anadirPedido', component: NuevoPedidoComponent },
  { path: 'editarPedido/:id', component: EditpedidosComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
