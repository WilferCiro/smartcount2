import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: 'icons',
    loadChildren: () =>
      import('./icons/icons.module').then((m) => m.IconsModule),
  },
  {
    path: 'application',
    loadChildren: () =>
      import('././main/application/application.module').then(
        (m) => m.ApplicationModule
      ),
  },
  /*{
    path: 'dashboard',
    loadChildren: () => import('./main/dashboard/dashboard.module').then((m) => m.DashboardModule),
  },*/
];
