import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ListEmpleadoComponent } from './pages/listar/list-empleado.component';

import { FormEmpleadoComponent } from './pages/form/form-empleado.component';

import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    ListEmpleadoComponent,
    FormEmpleadoComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
