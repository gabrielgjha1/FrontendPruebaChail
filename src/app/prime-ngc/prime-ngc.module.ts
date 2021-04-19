import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {MenubarModule} from 'primeng/menubar';
import {CascadeSelectModule} from 'primeng/cascadeselect';
import {InputTextModule} from 'primeng/inputtext';
import {InputTextareaModule} from 'primeng/inputtextarea';

import {DropdownModule} from 'primeng/dropdown';
import {InputNumberModule} from 'primeng/inputnumber';
import {RatingModule} from 'primeng/rating';
import {FieldsetModule} from 'primeng/fieldset';
import {FileUploadModule} from 'primeng/fileupload';
import {HttpClientModule} from '@angular/common/http';
import {BadgeModule} from 'primeng/badge';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {TableModule} from 'primeng/table';
import {GalleriaModule} from 'primeng/galleria';
import {DividerModule} from 'primeng/divider';
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports:[
    ButtonModule,
    CardModule,
    MenubarModule,
    CascadeSelectModule,
    DropdownModule,
    InputTextModule,
    InputTextareaModule,
    InputNumberModule,
    RatingModule,
    FieldsetModule,
    FileUploadModule,
    BadgeModule,
    ProgressSpinnerModule,
    TableModule,
    GalleriaModule,
    DividerModule

  ]
})
export class PrimeNgcModule { }
