import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { remoteRoutes } from './entry.routes';
import { NxWelcomeComponent } from './nx-welcome.component';

@NgModule({
  declarations: [NxWelcomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(remoteRoutes)
  ],
  providers: [],
})
export class RemoteEntryModule {}
