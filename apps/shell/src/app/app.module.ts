import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from "@angular/common/http";

import { NgScrollbar } from 'ngx-scrollbar';
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";

import { SharedModule } from '@frontend/shared';

import { appRoutes } from './app.routes';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { SigninComponent } from './pages/signin/signin.component';
import { FooterComponent } from './components/footer/footer.component';
import { CoreComponentModule } from "./core-component/core-component.module";
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { AuthInterceptor } from '@frontend/core';

export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, "./assets/i18n/",".json");
}

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    // HeaderComponent,
    // Layout1Component,
    // SidebarOneComponent
    FooterComponent,
    SigninComponent,
    AdminDashboardComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SharedModule,
    RouterModule.forRoot(appRoutes),
    CoreComponentModule,
    BrowserAnimationsModule,
    NgScrollbar,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
