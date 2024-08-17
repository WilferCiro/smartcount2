import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatChipsModule } from '@angular/material/chips';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MaterialModule } from './material/material.module';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { FeatherModule } from 'angular-feather';
import { Mail, Bell, Settings, Battery, Plus, PlusCircle, ChevronDown, ArrowLeft, AlertCircle, XSquare, X, Info, Eye, Edit, Trash, Printer, RotateCcw, ChevronUp, Download, Filter, Sliders, Search } from 'angular-feather/icons';
import { NgChartsModule } from 'ng2-charts';
import { NgApexchartsModule } from 'ng-apexcharts';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgxMaskModule } from 'ngx-mask';
import { NgxColorsModule } from 'ngx-colors';
import { NgxEditorModule } from 'ngx-editor';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { NgxMatIntlTelInputComponent } from 'ngx-mat-intl-tel-input';
import { CountUpModule } from 'ngx-countup';
import { TimepickerActions, TimepickerModule } from 'ngx-bootstrap/timepicker';
import { BsDatepickerConfig, BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { FullCalendarModule } from '@fullcalendar/angular';
import { LightgalleryModule } from 'lightgallery/angular';
import { ToastModule } from 'primeng/toast';
import { NgxbootstrapModule } from './ngx-bootstrap/ngxbootstrap.module';
import { CustomPaginationModule } from './custom-pagination/custom-pagination.module';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { SpinnerInterceptor } from '../../../core/src/lib/interceptor/spinner/spinner.interceptor';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
    NgApexchartsModule,
    FormsModule,
    CarouselModule,
    CustomPaginationModule,
    DragDropModule,
    NgxMaskModule.forRoot({
      showMaskTyped: false,
    }),
    NgChartsModule.forRoot(),
    FullCalendarModule,
    NgxbootstrapModule,
    NgxEditorModule,
    PopoverModule,
    MatTooltipModule,
    ToastModule,
    BsDatepickerModule.forRoot(),
    NgxDropzoneModule,
    MatStepperModule,
    MatFormFieldModule,
    MatChipsModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    LightgalleryModule,
    NgxMatIntlTelInputComponent,
    CountUpModule,
    TimepickerModule,
    FeatherModule.pick({ Mail, Bell, Settings, Battery, Plus, PlusCircle, ChevronDown, ChevronUp, ArrowLeft, Info, X, Eye, Edit, Trash, Printer, RotateCcw, Download, Filter, Sliders, Search }),
    NgxColorsModule
  ],
  exports:[
    MaterialModule,
    HttpClientModule,
    NgApexchartsModule,
    FormsModule,
    CarouselModule,
    CustomPaginationModule,
    DragDropModule,
    NgChartsModule,
    FullCalendarModule,
    NgxbootstrapModule,
    NgxMaskModule,
    NgxEditorModule,
    PopoverModule,
    MatTooltipModule,
    ToastModule,
    BsDatepickerModule,
    NgxMaskModule,
    NgxDropzoneModule,
    MatStepperModule,
    MatFormFieldModule,
    MatChipsModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    LightgalleryModule,
    NgxMatIntlTelInputComponent,
    CountUpModule,
    TimepickerModule,
    FeatherModule,
    NgxColorsModule
  ],
  providers: [
    DatePipe,
    TimepickerActions,
    BsDatepickerConfig,
    // { provide: HTTP_INTERCEPTORS, useClass: SpinnerInterceptor, multi: true },
  ]
})
export class SharedModule {}
