import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import { SharedModule } from '@frontend/shared';

import {remoteRoutes} from './entry.routes';
import {GeneralSettingsComponent} from './general-settings/general-settings.component';

@NgModule({
  declarations: [
    GeneralSettingsComponent,
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
