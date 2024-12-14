import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './products/products.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { PagesComponent } from './pages/pages.component';
import { CoupensComponent } from './coupens/coupens.component';

export const routes: Routes = [
    {path: '', redirectTo:'dashboard',pathMatch: 'full'},
    { path: 'dashboard' ,component: DashboardComponent},
    { path: 'products' ,component: ProductsComponent},
    { path: 'statistics' ,component: StatisticsComponent},
    { path: 'pages' ,component: PagesComponent},
    { path: 'coupens' ,component: CoupensComponent},
];
