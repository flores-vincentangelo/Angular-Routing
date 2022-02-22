import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ProductEditComponent } from './product-edit/product-edit.component';

import { SharedModule } from '../shared/shared.module';
import { ProductResolverService } from './product-resolver.service';
import { ProductEditInfoComponent } from './product-edit/product-edit-info.component';
import { ProductEditTagsComponent } from './product-edit/product-edit-tags.component';
import { ProductListResolverService } from './product-list-resolver.service';



const routes: Routes = [
  {
    path: 'products',
    component: ProductListComponent,
    resolve: { resolvedData: ProductListResolverService} },
  {
    path: 'products/:id',
    component: ProductDetailComponent,
    resolve: { resolvedData: ProductResolverService }
  },
  {
    path: 'products/:id/edit',
    component: ProductEditComponent,
    resolve: { resolvedData: ProductResolverService },
    children: [
      {
        path: '',
        redirectTo: 'info',
        pathMatch: 'full'
      },
      {
        path: 'info',
        component: ProductEditInfoComponent
      },
      {
        path: 'tags',
        component: ProductEditTagsComponent
      }

    ]
  }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ProductEditComponent,
    ProductEditInfoComponent,
    ProductEditTagsComponent
  ]
})
export class ProductModule { }
