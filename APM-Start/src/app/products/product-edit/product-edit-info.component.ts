import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

import { Product } from '../product';

@Component({
  templateUrl: './product-edit-info.component.html'
})
export class ProductEditInfoComponent implements OnInit {
  @ViewChild(NgForm, {static: false}) productForm: NgForm;

  errorMessage: string;
  product: Product | null = null;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.parent.data.subscribe(
      data => {
        if(this.productForm){
          this.productForm.reset();
        }
        this.product = data['resolvedData'].product;
        this.errorMessage = data['resolvedData'].error;
      }
    );
  }
}
