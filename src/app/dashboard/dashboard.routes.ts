import { Routes } from "@angular/router";
import { EstadisticaComponent } from "../movimiento/estadistica/estadistica.component";
import { MovimientoComponent } from "../movimiento/movimiento.component";
import { DetalleComponent } from "../movimiento/detalle/detalle.component";

export const dashboardRoutes: Routes = [
  {path: '', component: EstadisticaComponent},
  {path: 'movimiento', component: MovimientoComponent},
  {path: 'detalle', component: DetalleComponent}
]