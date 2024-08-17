import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService, Routes } from '@frontend/core';
import { categoryList, SweetalertService } from '@frontend/shared';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit{

  public routes = Routes;
  public filter = false;
  public categoryParent: categoryList | null = null;
  public tableData: Array<categoryList> = [];
  dataSource!: MatTableDataSource<categoryList>;

  constructor(
    private data: DataService,
    private router: Router,
    private route: ActivatedRoute,
    protected sweetalert: SweetalertService,
  ) {
    
  }
  ngOnInit(): void {
    const queryParam = this.route.snapshot.queryParamMap.get("subcategories");
    const pathParam = this.route.snapshot.paramMap.get("id");

    if (pathParam != null && queryParam != null) {
      this.data.getCategoryById(pathParam).subscribe((data: categoryList) => {
        this.categoryParent = data;
        this.tableData = data.children;
        this.dataSource = new MatTableDataSource(this.tableData);
      });

    } else {
      this.data.getCategoryList().subscribe((data: categoryList[]) => {
        this.tableData = data;
        this.dataSource = new MatTableDataSource(this.tableData);
      });
    }
    
  }

  deleteCategory(id: string | null) {
    // this.data.deleteCategory(parseInt("" + id)).forEach(console.log);
    this.sweetalert.deleteBtn(() => this.data.deleteCategory(parseInt("" + id)).toPromise());
  }

  openFilter() {
    this.filter = !this.filter;
  }
}
