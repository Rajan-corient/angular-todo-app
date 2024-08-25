import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-add-products',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-products.component.html',
  styleUrl: './add-products.component.scss',
})
export class AddProductsComponent implements OnInit {
  productForm!: FormGroup;

  get productsFormArray(): FormArray {
    return this.productForm.get('products') as FormArray;
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.productForm = this.fb.group({
      products: this.fb.array([this.createProductGroup()]),
    });
  }

  createProductGroup(): FormGroup {
    return this.fb.group({
      name: ['', Validators.required],
      price: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  addProduct() {
    this.productsFormArray.push(this.createProductGroup());
  }

  removeProduct(i: number) {
    if (this.productsFormArray.length > 1) {
      this.productsFormArray.removeAt(i);
    }
  }

  onResetForm(): void {
    while (this.productsFormArray.length) {
      this.productsFormArray.removeAt(0);
    }
    this.productsFormArray.push(this.createProductGroup());
  }

  onSubmit() {
    console.log(this.productForm.value);
  }
}
