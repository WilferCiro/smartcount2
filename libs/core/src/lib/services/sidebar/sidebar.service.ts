import { Injectable } from '@angular/core';
import { Routes } from '../../helpers/routes';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  private collapseSubject = new BehaviorSubject<boolean>(false);
  collapse$ = this.collapseSubject.asObservable();

  toggleCollapse() {
    this.collapseSubject.next(!this.collapseSubject.value);
  }

  public sideBarPosition: BehaviorSubject<string> = new BehaviorSubject<string>(
    localStorage.getItem('sideBarPosition') || 'false'
  );

  public toggleMobileSideBar: BehaviorSubject<string> =
    new BehaviorSubject<string>(
      localStorage.getItem('isMobileSidebar') || 'false'
    );

  public expandSideBar: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );

  public switchSideMenuPosition(): void {
    if (localStorage.getItem('sideBarPosition')) {
      this.sideBarPosition.next('false');
      this.expandSideBar.next(true);
      localStorage.removeItem('sideBarPosition');
    } else {
      this.sideBarPosition.next('true');
      this.expandSideBar.next(false);
      localStorage.setItem('sideBarPosition', 'true');
    }
  }

  public switchMobileSideBarPosition(): void {
    if (localStorage.getItem('isMobileSidebar')) {
      this.toggleMobileSideBar.next('false');
      localStorage.removeItem('isMobileSidebar');
    } else {
      this.toggleMobileSideBar.next('true');
      localStorage.setItem('isMobileSidebar', 'true');
    }
  }

  public sidebarData1 = [
    {
      tittle: 'Dashboard',
      showAsTab: false,
      separateRoute: false,
      hasSubRoute: false,
      showSubRoute: true,
      menu: [
        {
          menuValue: 'Admin Dashboard',
          icon: 'grid',
          route: Routes.adminDashboard,
          hasSubRoute: false,
          showSubRoute: false,
        },
      ],
    },
    {
      tittle: 'Productos',
      showAsTab: true,
      separateRoute: false,
      menu: [
        {
          menuValue: 'Lista de productos',
          icon: 'box',
          route: Routes.productList,
          hasSubRoute: false,
          showSubRoute: false,
        },
        {
          menuValue: 'Crear nuevo producto',
          icon: 'plus-square',
          route: Routes.addProduct,
          hasSubRoute: false,
          showSubRoute: false,
        },
      ],
    },
    {
      tittle: 'Categorias',
      showAsTab: true,
      separateRoute: false,
      menu: [
        {
          menuValue: 'Lista de categorías',
          icon: 'codepen',
          hasSubRoute: false,
          showSubRoute: false,
          route: Routes.categoryList,
          subRoutes: [],
        },
        {
          menuValue: 'Crear nueva categoría',
          icon: 'plus-square',
          route: Routes.addCategory,
          hasSubRoute: false,
          showSubRoute: false,
        },
        {
          menuValue: 'Sub categorías',
          icon: 'speaker',
          hasSubRoute: false,
          showSubRoute: false,
          route: Routes.subCategories,
          subRoutes: [],
        },
        {
          menuValue: 'Crear nueva sub categoría',
          icon: 'plus-square',
          route: Routes.addSubcategory,
          hasSubRoute: false,
          showSubRoute: false,
        },
      ],
    },
    {
      tittle: 'Compañias',
      showAsTab: true,
      separateRoute: false,
      menu: [
        {
          menuValue: 'Lista de compañías',
          icon: 'box',
          route: Routes.companyList,
          hasSubRoute: false,
          showSubRoute: false,
        },
        {
          menuValue: 'Crear nueva compañía',
          icon: 'plus-square',
          route: Routes.addCompany,
          hasSubRoute: false,
          showSubRoute: false,
        },
      ],
    },
    {
      tittle: 'Configuración',
      showAsTab: true,
      separateRoute: false,
      menu: [
        {
          menuValue: 'General',
          icon: 'settings',
          hasSubRoute: true,
          showSubRoute: false,
          page: 'general-settings',
          subMenus: [
            {
              menuValue: 'Perfil',
              route: Routes.profile,
              hasSubRoute: false,
              showSubRoute: false,
            },
            {
              menuValue: 'Seguridad',
              route: Routes.security,
              hasSubRoute: false,
              showSubRoute: false,
            },
            {
              menuValue: 'Notificaciones',
              // route: Routes.settingsNotification,
              hasSubRoute: false,
              showSubRoute: false,
            },
          ],
        },
        {
          menuValue: 'Del sitio web',
          page: 'website-settings',
          icon: 'globe',
          hasSubRoute: true,
          showSubRoute: false,
          subMenus: [
            {
              menuValue: 'Conf. del sistema',
              // route: Routes.systemSettings,
              hasSubRoute: false,
              showSubRoute: false,
            },
            {
              menuValue: 'Conf. de la empresa',
              // route: Routes.companySettings,
              hasSubRoute: false,
              showSubRoute: false,
            },
            {
              menuValue: 'Facturación',
              // route: Routes.invoiceSettings,
              hasSubRoute: false,
              showSubRoute: false,
            },
            {
              menuValue: 'POS',
              // route: Routes.posSettings,
              hasSubRoute: false,
              showSubRoute: false,
            },
            {
              menuValue: 'Impresoras',
              // route: Routes.printerSettings,
              hasSubRoute: false,
              showSubRoute: false,
            },
            {
              menuValue: 'Ubicación',
              // route: Routes.localizationSettings,
              hasSubRoute: false,
              showSubRoute: false,
            },
          ],
        },
      ],
    },
  ];


  public videocall = [
    {
      img: 'assets/img/users/user-01.jpg',
      name: 'Barbara',
    },
    {
      img: 'assets/img/users/user-02.jpg',
      name: 'Linnea',
    },
    {
      img: 'assets/img/users/user-05.jpg',
      name: 'Richard',
    },
    {
      img: 'assets/img/users/user-03.jpg',
      name: 'Freda',
    },
  ];

}