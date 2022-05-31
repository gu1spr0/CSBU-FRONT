import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './vistas/dashboard/dashboard.component';
import { FormulariofiltrarComponent } from './vistas/formulariofiltrar/formulariofiltrar.component';
import { PaginalogoComponent } from './vistas/index.paginas';
import{ LoginComponent }from './vistas/login/login.component';



const routes: Routes = [
  {path:'', redirectTo:'login',pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'formulariofiltrar',component:FormulariofiltrarComponent},
  {path:'paginalogo',component:PaginalogoComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent=[LoginComponent,DashboardComponent,FormulariofiltrarComponent]
