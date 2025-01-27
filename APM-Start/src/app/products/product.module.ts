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
import { ProductEditGuard } from './product-edit/product-edit.guard';



const routes: Routes = [
  {
    path: '',
    component: ProductListComponent,
    resolve: { resolvedData: ProductListResolverService}
  },
  {
    path: ':id',
    component: ProductDetailComponent,
    resolve: { resolvedData: ProductResolverService }
  },
  {
    path: ':id/edit',
    component: ProductEditComponent,
    canDeactivate: [ProductEditGuard],
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
