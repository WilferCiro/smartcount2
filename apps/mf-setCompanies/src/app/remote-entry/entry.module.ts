import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {SharedModule} from '@frontend/shared';

import {remoteRoutes} from './entry.routes';
import {CompanyListComponent} from './company-list/company-list.component';
import {CompanyFormComponent} from './company-form/company-form.component';

@NgModule({
  declarations: [
    CompanyListComponent,
    CompanyFormComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(remoteRoutes),
  ],
  providers: [],
})
export class RemoteEntryModule {
}
