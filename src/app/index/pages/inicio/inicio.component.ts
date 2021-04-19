import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hotel } from 'src/app/interfaces/hotel.interface';
import { HotelService } from 'src/app/services/hotel/hotel.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  public hotels:Hotel[]
  public spinner:boolean=true;

  public categoria:any="";

  public Categoria:any=[

    {name: '1 Estrella', code: '1'},
    {name: '2 Estrella', code: '2'},
    {name: '3 Estrella', code: '3'},
    {name: '4 Estrella', code: '4'},
    {name: '5 Estrella', code: '5'},

  ]

  public precio:any="";

  public Precio:any=[

    {name: 'De Mayor A Menor', code: '1'},
    {name: 'De Menor A Mayor', code: '-1'},

  ]

  public puntuacion:any="";

  public Puntuacion:any=[

    {name: '1 Estrella', code: '1'},
    {name: '2 Estrella', code: '2'},
    {name: '3 Estrella', code: '3'},
    {name: '4 Estrella', code: '4'},
    {name: '5 Estrella', code: '5'},

  ]




  constructor(private _hotelService:HotelService, private router:Router) { }

  ngOnInit(): void {

    //trae el listado de hoteles
    this.TraerHoteles();


  }




  TraerHoteles(){

    //trae los hoteles de la peticion al servicio
    this._hotelService.GetHotel().subscribe((resp:Hotel[])=>{this.hotels=resp; this.spinner=false });


  }

  //navega a la ruta para ver un hotel
  verhotel(id:string){


    this.router.navigateByUrl('/hotel/'+id)


  }

  // lista los hoteles por precio
  TraerPorPrecio(event:any){


    this._hotelService.BuscarPorPrecio(event.value.code).subscribe(resp=>{

      this.hotels=resp;


    })

  }

  //trae por categoria
  TraerCategoria(event:any){


    this._hotelService.BuscarCategoriaPuntuacion(this.categoria.code,this.puntuacion.code).subscribe(resp=>{

      this.hotels = resp;

    })

  }



}
