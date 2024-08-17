export class Routes {
  private static base = '';
  static paymentreport: string;

  public static get baseUrl(): string {
    return this.base;
  }
  // auth routes *start*

  public static get signIn(): string {
    return this.base + '/signin';
  }
  public static get signUp(): string {
    return this.base + '/signup';
  }
  public static get forgotPassword(): string {
    return this.base + '/forgot-password';
  }
  public static get forgotPassword2(): string {
    return this.base + '/forgot-password-2';
  }
  public static get forgotPassword3(): string {
    return this.base + '/forgot-password-3';
  }
  // auth routes *end*

  // error pages routes *start*

  public static get errorPages(): string {
    return this.baseUrl + '/error-pages';
  }
  public static get error404(): string {
    return this.errorPages + '/error-404';
  }
  public static get error500(): string {
    return this.errorPages + '/error-500';
  }
  // error pages routes *ends*

  // core pages routes *start*

  public static get core(): string {
    return this.baseUrl;
  }
  public static get dashboard(): string {
    return this.baseUrl + '/dashboard';
  }
  public static get components(): string {
    return this.core + '/components';
  }
  public static get product(): string {
    return this.core + '/products';
  }
  public static get category(): string {
    return this.core + '/categories';
  }
  public static get company(): string {
    return this.core + '/set-companies';
  }
  public static get subcategory(): string {
    return this.core + '/subcategories';
  }
  public static get settings(): string {
    return this.core + '/settings';
  }
  // core pages routes *ends*

  // core pages child routes

  public static get productList(): string {
    return this.product + '/product-list';
  }

  public static get addProduct(): string {
    return this.product + '/add-product';
  }
  public static get productById(): string {
    return this.product + '/edit-product/';
  }

  public static get categoryList(): string {
    return this.category + '/category-list';
  }

  public static get categoryById(): string {
    return this.category + '/edit-category/';
  }

  public static get addCategory(): string {
    return this.category + '/add-category';
  }

  public static get subCategories(): string {
    return this.category + '/subcategories/subcategory-list';
  }

  public static get addSubcategory(): string {
    return this.category + '/subcategories/add-subcategory';
  }
  public static get companyList(): string {
    return this.company + '/company-list';
  }

  public static get addCompany(): string {
    return this.company + '/add-company/';
  }
  public static get editProduct(): string {
    return this.product + '/product/edit-product';
  }
  public static get editCategory(): string {
    return this.product + '/edit-category';
  }
  public static get editSubCategory(): string {
    return this.product + '/edit-subcategory';
  }
  public static get productDetails(): string {
    return this.product + '/product/product-details';
  }
  public static get profile(): string {
    return this.settings + '/general-settings/profile';
  }
  public static get security(): string {
    return this.settings + '/general-settings/security';
  }

  public static get adminDashboard(): string {
    return this.dashboard + '/admin-dashboard';
  }
}
