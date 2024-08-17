import { Route } from '@angular/router';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryFormComponent } from './category-form/category-form.component';
import {SubcategoryListComponent} from "./subcategory-list/subcategory-list.component";
import {SubcategoryFormComponent} from "./subcategory-form/subcategory-form.component";

export const remoteRoutes: Route[] = [
  { path: 'category-list', component: CategoryListComponent },
  { path: 'category-list/:id', component: CategoryListComponent },
  { path: 'add-category', component: CategoryFormComponent },
  { path: 'edit-category/:id', component: CategoryFormComponent },
  { path: 'subcategories/subcategory-list', component: SubcategoryListComponent },
  { path: ':id/add-subcategory', component: SubcategoryFormComponent },
];
