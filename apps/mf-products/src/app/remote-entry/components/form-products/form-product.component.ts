/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable @angular-eslint/component-selector */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService, Routes, SidebarService } from '@frontend/core';
import { productList, categoryList, printerList } from '@frontend/shared';
import { v4 as uuidv4 } from 'uuid';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'work-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.scss'],
})
export class ProductFormComponent implements OnInit {
  isEdit: boolean;
  id: string | null;
  formGroup: FormGroup;
  product: productList | null;
  categories: categoryList[] = [];
  printers: printerList[] = [];
  selectedCategory: string | null = '';
  categoryRows: { category: string; subcategory: string; showSubcategorySelect: boolean }[] = [];
  sku: string = '';
  minStock: number = 0;
  maxStock: number = 0;
  weight: number = 0;
  isProductAdded = false;
  images: string[] = [];
  preparationTime: number = 0;
  hasIngredients: string = 'no';
  hasPriceVariation: string = 'no';
  hasModifiers: string = 'no';
  modifierName: string = '';
  modifierType: string = '';
  modifierCost: string = '';
  modifierQuantity: string = '';
  minCondition: number = 1;
  maxCondition: number = 1;
  productControl = new FormControl();
  filteredProducts: Observable<productList[]>;
  selectedProducts: productList[] = [];



  initChecked = false;
  selectedValue1 = '';
  selectedValue2 = '';
  selectedValue3 = '';
  selectedValue4 = '';
  selectedValue5 = '';
  selectedValue6 = '';
  selectedValue7 = '';
  selectedValue8 = '';
  selectedValue9 = '';
  selectedValue10 = '';
  selectedValue11 = '';
  selectedValue12 = '';
  selectedValue13 = '';
  showModifierProducts = false;

  products = [
    { name: 'Producto 1', value: '2.5' },
    { name: 'Producto 2', value: '1' },
    { name: 'Producto 3', value: '1.5' }
  ];

  filteredTaxList: string[] = [];
  subcategoryList = ['Smartphones', 'Laptops', 'Televisores']; 
  filteredSubcategoryList = this.subcategoryList;

  selectedList1: { value: string }[] = [{ value: 'Escoger uno' }, { value: 'Escoger varios' },];
  selectedList2: { value: string }[] = [{ value: 'Si' }, { value: 'No' }];
  selectedList3: { value: string }[] = [{ value: 'Uno' }, { value: 'Varios' }];

  taxData = [
    { value: 'Regular', options: ['5%', '19%'] },
    { value: 'Consumo', options: ['8%', 'ICL'] },
    { value: 'Plástico', options: ['$66 - AÑO 2024', 'INPP'] },
    { value: 'Saludables', options: ['ICUI', 'IBUA'] },
    { value: 'Licor', options: ['5%', '19%'] },
  ];

  validatePositive(value: number): void {
    this.minStock = value < 0 ? 0 : value;
  }

  preventNonNumericalInput(event: KeyboardEvent): void {
    const key = event.key;
    const isNumeric = /^[0-9]$/.test(key) || key === 'Backspace';
    if (!isNumeric) {
      event.preventDefault();
    }
  }
  public routes = Routes;
  // pagination variables
  public tableData: productList[] = [];
  public pageSize = 10;
  public serialNumberArray: Array<number> = [];
  public totalData = 0;
  showFilter = false;
  dataSource!: MatTableDataSource<productList>;
  public searchDataValue = '';
  //** / pagination variables

  constructor(
    private data: DataService,
    private router: Router,
    private sidebar: SidebarService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) { 
    this.isEdit = false;
    this.id = '';
    this.product = null;
    this.formGroup = this.initFormGroup();

    this.filteredProducts = this.productControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );

  }
  ngOnInit(): void {
    this.getIdFromURL();
    if (this.isEdit && this.product) {
      this.selectedCategory = this.product?.idCategory ?? '';
    }
    this.loadCategories();
    this.loadProducts();
    this.loadPrinters();
    this.addNewCategoryRow();
  }
  

  async loadCategories() {
    try {
      const response = await this.data.getCategoryList().toPromise();
      if (response) {
        this.categories = response;
      } else {
        console.error('Error fetching categories');
      }
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  }  
  async loadProducts() {
    try {
      const response = await this.data.getProductList().toPromise();
      if (response) {
        this.tableData = response;
      } else {
        console.error('Error fetching products');
      }
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  }
  async loadPrinters() {
    try {
      const response = await this.data.getPrinterList().toPromise();
      if (response) {
        this.printers = response;
      } else {
        console.error('Error fetching printers');
      }
    } catch (error) {
      console.error('Error fetching printers:', error);
    }
  }

  getIdFromURL() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.isEdit = this.id != null;
    if (this.isEdit) {
      this.getProductData();
    }
  }

  getProductData() {
    if (this.id) {
      this.data.getProductById(this.id).subscribe(
        (productData) => {
          this.product = productData;
          this.populateForm();
        },
        (error) => this.handleDataError(error)
      );
    } else {
      console.error('Product ID not available');
    }
  }

  onSubmit() {
    console.log(this.formGroup)
    if (this.formGroup.valid) {
      const formData = this.prepareFormData();
      if (this.isEdit) {
        this.updateProduct(formData);
      } else {
        this.createProduct(formData);
      }
    } else {
      console.log('El formulario no es válido. Por favor, verifica los campos.');
    }
  }

  createProduct(formData: productList) {
    this.data.createProduct(formData).subscribe(
      () => this.handleSuccessNavigation(),
      (error) => this.handleApiError('Error al crear el producto:', error)
    );
  }

  updateProduct(formData: productList) {
    formData.idProduct = this.id;
    this.data.updateProduct(formData).subscribe(
      () => this.handleSuccessNavigation(),
      (error) => this.handleApiError('Error al actualizar el producto:', error)
    );
  }
  populateForm() {
    if (this.product) {
      this.formGroup.patchValue({
        sNo: this.product.sNo,
        prodName: this.product.prodName,
        prodCode: this.product.prodCode,
        prodDescription: this.product.prodDescription,
        prodMeasureUnit: this.product.prodMeasureUnit,
        prodWeight: this.product.prodWeight,
        prodImage: this.product.prodImage,
        prodCostPrice: this.product.prodCostPrice ? this.product.prodCostPrice.toString() : null,
        prodBasePrice: this.product.prodBasePrice ? this.product.prodBasePrice.toString() : null,
        prodAverageCost: this.product.prodAverageCost ? this.product.prodAverageCost.toString() : null,
        prodPercentageDiscount: this.product.prodPercentageDiscount,
        prodInventory: this.product.prodInventory,
        prodIsRawMaterial: this.product.prodIsRawMaterial === true ? 'yes' : 'no',
        prodIsSale: this.product.prodIsSale === true ? 'yes' : 'no',
        prodStatusSaleNegative: this.product.prodStatusSaleNegative === true ? 'yes' : 'no',
        prodStatusAffectInventory: this.product.prodStatusAffectInventory === true ? 'yes' : 'no',
        prodStatus: this.product.prodStatus === true ? 'active' : 'inactive',
        createdAt: this.product.createdAt,
        updatedAt: this.product.updatedAt,
        idCategory: this.product.idCategory,
        isSelected: this.product.isSelected
      });
    }
  }

  private initFormGroup(): FormGroup {
    return this.formBuilder.group({
      prodName: ['', [Validators.required]],
      prodCode: ['', [Validators.required]],
      prodDescription: ['', [Validators.required, Validators.maxLength(255)]],
      prodMeasureUnit: [null],
      prodWeight: [null, [Validators.min(0)]],
      prodImage: [''],
      prodCostPrice: [0, [Validators.required, Validators.min(0)]],
      prodBasePrice: [0, [Validators.required, Validators.min(0)]],
      prodAverageCost: [0, [Validators.required, Validators.min(0)]],
      prodPercentageDiscount: [0, [Validators.min(0), Validators.max(100)]],
      prodInventory: [0, [Validators.min(0)]],
      prodIsRawMaterial: [false, [Validators.required]],
      prodIsSale: [true],
      prodStatusSaleNegative: [false],
      prodStatusAffectInventory: [true, [Validators.required]],
      prodStatus: [true, [Validators.required]],
      idCategory: [this.selectedCategory, [Validators.required]]
    });
  }

  private prepareFormData(): productList {
    const formData = { ...this.formGroup.value };
    formData.prodAverageCost = parseFloat(formData.prodAverageCost);
    formData.prodBasePrice = parseFloat(formData.prodBasePrice);
    formData.prodCostPrice = parseFloat(formData.prodCostPrice);
    formData.prodStatus = formData.prodStatus === 'active';
    formData.prodIsRawMaterial = formData.prodIsRawMaterial === 'Si';
    formData.prodIsSale = formData.prodIsSale === 'Si';
    formData.prodStatusAffectInventory = formData.prodStatusAffectInventory === 'Si';
    formData.prodStatusSaleNegative = formData.prodStatusSaleNegative === 'Si';
    return formData;
  }

  private handleSuccessNavigation(): void {
    this.router.navigate(['/products/product-list']);
  }

  private handleApiError(errorMessage: string, error: any): void {
    console.error(errorMessage, error);
  }

  private handleDataError(error: any): void {
    console.error('Error al obtener datos de el producto:', error);
  }


  onChangeTipoTax(value: string) {
    const selectedData = this.taxData.find(data => data.value === value);
    this.filteredTaxList = selectedData ? selectedData.options : [];
  }
   showSubcategorySelect(index: number) {
    this.categoryRows[index].showSubcategorySelect = !this.categoryRows[index].showSubcategorySelect;
  }

  addNewCategoryRow() {
    this.categoryRows.push({ category: '', subcategory: '', showSubcategorySelect: false });
  }

  removeCategoryRow(index: number) {
    this.categoryRows.splice(index, 1);
  }
  generateSKU(): void {
    this.sku = uuidv4();
    console.log(this.sku);
  }

  isCollapsed: boolean = false;
  toggleCollapse() {
    this.sidebar.toggleCollapse();
    this.isCollapsed = !this.isCollapsed;
  }
  public image: boolean[] = [true, true, true];

  public removeImg(index: number) {
    this.image[index] = !this.image[index];
  }

  public searchData(value: string): void {
    this.dataSource.filter = value.trim().toLowerCase();
    this.tableData = this.dataSource.filteredData;
  }
  checkInputValidity() {
    const nameInput = document.getElementById('validation1') as HTMLInputElement;
    if (nameInput.value.trim() === '') {
      nameInput.classList.remove('is-valid');
      nameInput.classList.add('is-invalid');
    } else {
      nameInput.classList.remove('is-invalid');
      nameInput.classList.add('is-valid');
    }
  }
  get ingredientsText(): string {
    const prodName = this.formGroup.get('prodName')?.value || 'el producto';
    return ` ${prodName}`;
  }

  selectAllPrinters(initChecked: boolean) {
    if (!initChecked) {
      this.tableData.forEach((f) => {
        f.isSelected = true;
      });
    } else {
      this.tableData.forEach((f) => {
        f.isSelected = false;
      });
    }
  }
  triggerFileInput() {
    const fileInput = document.querySelector('.image-upload input[type="file"]') as HTMLElement;
    fileInput.click();
  }

  onImageSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.images.push(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  }
  
  removeImage(index: number) {
    this.images.splice(index, 1);
  }  

  private _filter(value: string): productList[] {
    if (!value || value.trim() === '') {
      return [];
    }

    const filterValue = value.toLowerCase();
    
    // Regex to match the characters in the same order but not necessarily consecutively
    const regex = new RegExp(filterValue.split('').join('.*'), 'i');

    return this.tableData.filter(product => regex.test(product.prodName));
  }

  displayProduct(product: productList): string {
    return product && product.prodName ? product.prodName : '';
  }

  addProduct() {
    this.isProductAdded = true;
    const product = this.productControl.value;
    if (product && !this.selectedProducts.includes(product)) {
      this.selectedProducts.push(product);
    }
    this.productControl.reset();
  }

  removeProduct(product: productList) {
    const index = this.selectedProducts.indexOf(product);
    if (index >= 0) {
      this.selectedProducts.splice(index, 1);
    }
    if (this.selectedProducts.length === 0) {
      this.isProductAdded = false;
    }
  }
  
}
