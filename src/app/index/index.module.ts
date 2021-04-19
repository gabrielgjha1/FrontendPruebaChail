import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexRoutingModule } from './index-routing.module';
import { PrimeNgcModule } from '../prime-ngc/prime-ngc.module';
import { FormsModule } from '@angular/forms';
import { VerHotelesComponent } from './pages/ver-hoteles/ver-hoteles.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { MainComponent } from './pages/main/main.component';


@NgModule({
  declarations: [InicioComponent, VerHotelesComponent, MainComponent],
  imports: [
    CommonModule,
    IndexRoutingModule,
    PrimeNgcModule,
    FormsModule
  ]
})
export class IndexModule { }
