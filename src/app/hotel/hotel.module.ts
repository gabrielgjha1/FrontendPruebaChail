import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HotelRoutingModule } from './hotel-routing.module';
import { CreateHotelComponent } from './create-hotel/create-hotel.component';
import { ListHotelComponent } from './list-hotel/list-hotel.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrimeNgcModule } from '../prime-ngc/prime-ngc.module';


@NgModule({
  declarations: [CreateHotelComponent, ListHotelComponent],
  imports: [
    CommonModule,
    HotelRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    PrimeNgcModule
  ]
})
export class HotelModule { }
