import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { NuevoComponent } from './nuevo/nuevo.component';
import { ReporteComponent } from './reporte/reporte.component';
import { ConfiguracionesComponent } from './configuraciones/configuraciones.component';
import { SeguimientoComponent } from './seguimiento/seguimiento.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    NuevoComponent,
    ReporteComponent,
    ConfiguracionesComponent,
    SeguimientoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
