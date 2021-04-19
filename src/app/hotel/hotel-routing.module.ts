import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../auth/login/login.component';
import { MainComponent } from '../auth/main/main.component';
import { RegisterComponent } from '../auth/register/register.component';
import { CreateHotelComponent } from './create-hotel/create-hotel.component';
import { ListHotelComponent } from './list-hotel/list-hotel.component';


const routes: Routes = [

    {

      path:'',

      children:[

        {path:'',component:ListHotelComponent},
        {path:'createhotel',component:CreateHotelComponent},
        {path:'**',redirectTo:'login'},

      ]

    }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HotelRoutingModule { }
