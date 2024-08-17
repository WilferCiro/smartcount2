import { Route } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductFormComponent } from './components/form-products/form-product.component';

export const remoteRoutes: Route[] = [
  { path: 'product-list', component: ProductListComponent },
  { path: 'add-product', component: ProductFormComponent },
  { path: 'edit-product/:id', component: ProductFormComponent },
];
