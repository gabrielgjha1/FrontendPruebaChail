import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HotelRoutingModule } from './hotel-routing.module';
import { CreateHotelComponent } from './create-hotel/create-hotel.component';
import { ListHotelComponent } from './list-hotel/list-hotel.component';


@NgModule({
  declarations: [CreateHotelComponent, ListHotelComponent],
  imports: [
    CommonModule,
    HotelRoutingModule
  ]
})
export class HotelModule { }
