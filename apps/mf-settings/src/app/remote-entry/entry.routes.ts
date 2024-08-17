import { Route } from '@angular/router';
import { GeneralSettingsComponent } from './general-settings/general-settings.component';
import { SegurityComponent } from './security-settings/security.component';

export const remoteRoutes: Route[] = [
  { path: 'general-settings/profile', component: GeneralSettingsComponent},
  {path: 'general-settings/security', component: SegurityComponent,}
];
