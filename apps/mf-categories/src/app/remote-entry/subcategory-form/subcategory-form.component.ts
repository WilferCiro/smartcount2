import {Component, OnInit} from "@angular/core";
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { DataService } from '@frontend/core';
import { categoryList } from "@frontend/shared";

@Component({
  selector: 'app-subcategory',
  templateUrl: './subcategory-form.component.html',
  styleUrl: './subcategory-form.component.scss'
})
export class SubcategoryFormComponent implements OnInit {
  isEdit: boolean;
  id: string | null;
  showSelect = false;
  formGroup: FormGroup;
  parentCategory: categoryList | null;

  constructor(
    private data: DataService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.id = '';
    this.isEdit = false;
    this.formGroup = this.initFormGroup();
    this.parentCategory = null    
  }
  ngOnInit(): void {
    this.getIdFromURL();
  }

  getIdFromURL() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.isEdit = this.id !== null;
    if (this.isEdit) {
      this.getCategoryData();
    }
  }

  getCategoryData() {
    if (this.id) {
      this.data.getCategoryById(this.id).subscribe(
        (categoryData) => {
          this.parentCategory = categoryData;
          this.populateForm();
        },
        (error) => this.handleDataError(error)
      );
    } else {
      console.error('Category ID not available');
    }
  }

  onSubmit() {
    if (this.formGroup.valid) {
      const formData = this.prepareFormData();
      if (this.isEdit) {
        this.updateCategory(formData);
      } else {
        this.createCategory(formData);
      }
    } else {
      console.log('El formulario no es válido. Por favor, verifica los campos.');
    }
  }

  createCategory(formData: categoryList) {
    this.data.createCategory(formData).subscribe(
      () => this.handleSuccessNavigation(),
      (error) => this.handleApiError('Error al crear la categoría:', error)
    );
  }

  updateCategory(formData: categoryList) {
    formData.idCategory = this.id;
    this.data.updateCategory(formData).subscribe(
      () => this.handleSuccessNavigation(),
      (error) => this.handleApiError('Error al actualizar la categoría:', error)
    );
  }

  populateForm() {
    if (this.parentCategory) {
      this.formGroup.patchValue({
        cateName: this.parentCategory.cateName,
        cateSalePrice: this.parentCategory.cateSalePrice,
        cateDeliveryPrice: this.parentCategory.cateDeliveryPrice,
        cateColor: this.parentCategory.cateColor,
        cateState: this.parentCategory.cateState ? 'Active' : 'Inactive',
        cateImage: this.parentCategory.cateImage,
        cateDescription: this.parentCategory.cateDescription,
        cateDiscount: this.parentCategory.cateDiscount,
        createdAt: this.parentCategory.createdAt,
        updatedAt: this.parentCategory.updatedAt,
      });
    }
  }

  private initFormGroup(): FormGroup {
    return this.formBuilder.group({
      cateName: ['', Validators.required],
      cateSalePrice: [0.0, Validators.required],
      cateDeliveryPrice: [0.0, Validators.required],
      cateColor: ['', Validators.required],
      cateState: ['Active', Validators.required],
      cateImage: [''],
      cateDescription: [''],
      cateDiscount: [false],
      createdAt: [new Date()],
      updatedAt: [new Date()],
    });
  }

  private prepareFormData(): categoryList {
    const formData = { ...this.formGroup.value };
    formData.cateSalePrice = parseFloat(formData.cateSalePrice);
    formData.cateDeliveryPrice = parseFloat(formData.cateDeliveryPrice);
    formData.cateState = formData.cateState === 'Active';
    return formData;
  }

  private handleSuccessNavigation(): void {
    this.router.navigate(['/categories/category-list']);
  }

  private handleApiError(errorMessage: string, error: any): void {
    console.error(errorMessage, error);
  }

  private handleDataError(error: any): void {
    console.error('Error al obtener datos de la categoría:', error);
  }

  showSelectCategory(): void {
    if (!this.showSelect) {
      this.showSelect = true;
    }
  }
}
