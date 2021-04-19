import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { MainComponent } from './pages/main/main.component';
import { VerHotelesComponent } from './pages/ver-hoteles/ver-hoteles.component';


const routes: Routes = [

  {

    path:'',
    component:MainComponent,
    children:[

      {path:'',component:InicioComponent},
      {path:'hotel/:id',component:VerHotelesComponent},

    ]

  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndexRoutingModule { }
