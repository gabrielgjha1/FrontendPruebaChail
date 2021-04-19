import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [

  {

    path:'',
    loadChildren:()=>import('./index/index.module').then(m=>m.IndexModule)

  },

  {

    path:'crudhotel',
    loadChildren:()=>import('./hotel/hotel.module').then(m=>m.HotelModule)

  },


  {

    path:'auth',
    loadChildren:()=>import('./auth/auth.module').then(m=>m.AuthModule)

  },

  {

    path:'**',
    redirectTo:''

  }





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
