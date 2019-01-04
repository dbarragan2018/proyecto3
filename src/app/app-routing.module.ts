import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NuevoComponent } from './nuevo/nuevo.component';
import { ReporteComponent } from './reporte/reporte.component';

const routes: Routes = [
  {path: 'home', component:HomeComponent},
  {path: 'nuevo', component:NuevoComponent},
  {path: 'reportes', component:ReporteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
