import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService, Routes, SidebarService } from '@frontend/core';
import { categoryList } from '@frontend/shared';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.scss'],
})
export class CategoryFormComponent implements OnInit {
  isEdit: boolean;
  id: string | null;
  formGroup: FormGroup;
  category: categoryList | null;
  public routes = Routes;

  constructor(
    private data: DataService,
    private formBuilder: FormBuilder,
    private sidebar: SidebarService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.id = '';
    this.isEdit = false;
    this.category = null;
    this.formGroup = this.initFormGroup();
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
          this.category = categoryData;
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
    if (this.category) {
      this.formGroup.patchValue({
        cateName: this.category.cateName,
        cateSalePrice: this.category.cateSalePrice,
        cateDeliveryPrice: this.category.cateDeliveryPrice,
        cateColor: this.category.cateColor,
        cateState: this.category.cateState ? 'Active' : 'Inactive',
        cateImage: this.category.cateImage,
        cateDescription: this.category.cateDescription,
        cateDiscount: this.category.cateDiscount,
        createdAt: this.category.createdAt,
        updatedAt: this.category.updatedAt,
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
}
