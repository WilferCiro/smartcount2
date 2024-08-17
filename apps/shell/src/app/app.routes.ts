import { Route } from '@angular/router';
// import { Layout1Component } from './layouts/layout1/layout1.component';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import {CoreComponentComponent} from "./core-component/core-component.component";
import { AuthGuard } from '@frontend/core';
import { SigninComponent } from './pages/signin/signin.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: SigninComponent,
  },
  {
    path: '',
    component: CoreComponentComponent,
    //canActivate: [AuthGuard],
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'admin-dashboard'
      },
      {
        path: 'dashboard/admin-dashboard',
        component: AdminDashboardComponent
      },
      /*{
        path: 'sidebar',
        component: SidebarOneComponent
      },*/
      {
        path: 'products',
        loadChildren: () =>
          import('mf-products/Module').then((m) => m.RemoteEntryModule),
      },
      {
        path: 'mf-auth',
        loadChildren: () =>
          import('mf-auth/Module').then((m) => m.RemoteEntryModule),
      },
      {
        path: 'categories',
        loadChildren: () =>
          import('mf-categories/Module').then((m) => m.RemoteEntryModule),
      },
      {
        path: 'set-companies',
        loadChildren: () =>
          import('mf-setCompanies/Module').then((m) => m.RemoteEntryModule),
      },
      {
        path: 'settings',
        loadChildren: () =>
          import('mf-settings/Module').then((m) => m.RemoteEntryModule),
      },
    ]
  },
];
