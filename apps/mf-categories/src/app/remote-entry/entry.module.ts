import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {SharedModule} from '@frontend/shared';

import {remoteRoutes} from './entry.routes';
import {CategoryListComponent} from './category-list/category-list.component';
import {CategoryFormComponent} from './category-form/category-form.component';
import {SubcategoryListComponent} from "./subcategory-list/subcategory-list.component";
import {SubcategoryFormComponent} from "./subcategory-form/subcategory-form.component";

@NgModule({
  declarations: [
    CategoryListComponent,
    CategoryFormComponent,
    SubcategoryListComponent,
    SubcategoryFormComponent
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
