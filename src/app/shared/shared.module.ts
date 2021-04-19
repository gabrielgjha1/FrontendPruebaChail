import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { PrimeNgcModule } from '../prime-ngc/prime-ngc.module';



@NgModule({
  declarations: [MenuComponent],
  imports: [
    CommonModule,
    PrimeNgcModule
  ],
  exports:[
    MenuComponent
  ]
})
export class SharedModule { }
