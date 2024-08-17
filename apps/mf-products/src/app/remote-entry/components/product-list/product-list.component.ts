/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DataService, Routes, SidebarService } from '@frontend/core';
import { productList, SweetalertService, PaginationService} from '@frontend/shared';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
})
export class ProductListComponent implements OnInit {

  initChecked = false;
  selectedValue1 = '';
  selectedValue2 = '';
  selectedValue3 = '';
  selectedValue4 = '';
  selectedValue5 = '';
  selectedValue6 = '';
  // pagination variables
  public tableData: Array<productList> = [];
  public pageSize = 10;
  public serialNumberArray: Array<number> = [];
  public totalData = 0;
  showFilter = false;
  dataSource!: MatTableDataSource<productList>;
  public searchDataValue = '';
  //** / pagination variables

  public routes = Routes;

  constructor(
    private sidebar: SidebarService,
    private router: Router,
    private data: DataService,
    protected sweetalert: SweetalertService,
    private pagination: PaginationService,
  ) {
    
  }
  ngOnInit(): void {
    this.data.getProductList().subscribe((data: productList[]) => {
      this.tableData = data;
      this.dataSource = new MatTableDataSource(this.tableData);
    });
  }

  deleteProduct(id: string | null) {
    // this.data.deleteCategory(parseInt("" + id)).forEach(console.log);
    this.sweetalert.deleteBtn(() => this.data.deleteProduct(parseInt("" + id)).toPromise());
  }
  
  public sortData(sort: Sort) {
    const data = this.tableData.slice();
    if (!sort.active || sort.direction === '') {
      this.tableData = data;
    } else {
      this.tableData = data.sort((a, b) => {
        const aValue = (a as never)[sort.active];
        const bValue = (b as never)[sort.active];
        return (aValue < bValue ? -1 : 1) * (sort.direction === 'asc' ? 1 : -1);
      });
    }
  }
  public searchData(value: string): void {
    this.dataSource.filter = value.trim().toLowerCase();
    this.tableData = this.dataSource.filteredData;
  }
  public filter = false;
  openFilter() {
    this.filter = !this.filter;
  }
  isCollapsed = false;
  toggleCollapse() {
    this.sidebar.toggleCollapse();
    this.isCollapsed = !this.isCollapsed;
  }
  selectAll(initChecked: boolean) {
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

}
