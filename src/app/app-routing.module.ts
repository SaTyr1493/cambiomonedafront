import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CambioComponent } from './cambio/cambio.component';
import { MonedaComponent } from './moneda/moneda.component';

const routes: Routes = [
  {path:'cambiarMoneda', component:CambioComponent},
  {path:'actualizarTipoCambio', component:MonedaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
