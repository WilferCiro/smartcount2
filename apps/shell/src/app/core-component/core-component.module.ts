import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";

import {SharedModule} from "@frontend/shared";

import {routes} from "./core-component.routes";
import {CoreComponentComponent} from "./core-component.component";
import {HeaderComponent} from "../components/header/header.component";
import {SidebarOneComponent} from "../components/sidebar-one/sidebar-one.component";

@NgModule({
  declarations: [
    CoreComponentComponent,
    HeaderComponent,
    SidebarOneComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  exports: [RouterModule]
})
export class CoreComponentModule {}
