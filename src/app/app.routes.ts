import { Component } from "@angular/core";
import { RouterModule,Routes } from "@angular/router";
import {
    DashboardComponent,
    FormulariofiltrarComponent,
    LoginComponent,
    PaginalogoComponent,
    PesperaComponent
} from"./vistas/index.paginas";

const app_routes : Routes=[
    {path: 'login', component: LoginComponent},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'formulariofiltrar', component: FormulariofiltrarComponent},
    {path: 'paginalogo', component: PaginalogoComponent},
    {path: 'pespera', component: PesperaComponent}
] 
export const app_routing = RouterModule.forRoot(app_routes,{useHash:true});
