import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { remoteRoutes } from './entry.routes';

import { SharedModule } from '@frontend/shared';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductFormComponent } from './components/form-products/form-product.component';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [ProductListComponent, ProductFormComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(remoteRoutes),
    MatSelectModule,

  ],
  providers: [],
})
export class RemoteEntryModule {}
