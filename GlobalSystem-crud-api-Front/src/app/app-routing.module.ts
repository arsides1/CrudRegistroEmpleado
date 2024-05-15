import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListEmpleadoComponent } from './pages/listar/list-empleado.component';

import { FormEmpleadoComponent } from './pages/form/form-empleado.component';

const routes: Routes = [
  { path: 'empleados', component: ListEmpleadoComponent },
  { path: 'empleados/nuevo', component: FormEmpleadoComponent },
  { path: 'empleados/:id/editar', component: FormEmpleadoComponent },
  { path: '', redirectTo: '/empleados', pathMatch: 'full' }
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
