import { Route } from '@angular/router';
import { CompanyListComponent } from './company-list/company-list.component';
import { CompanyFormComponent } from './company-form/company-form.component';

export const remoteRoutes: Route[] = [
  { path: 'company-list', component: CompanyListComponent },
  { path: 'company-list/:id', component: CompanyListComponent },
  { path: 'add-company', component: CompanyFormComponent },
  { path: 'edit-company/:id', component: CompanyFormComponent },
];
