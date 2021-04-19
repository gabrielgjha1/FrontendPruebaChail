import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Hotel, Resp } from 'src/app/interfaces/hotel.interface'
import {catchError, map, tap} from 'rxjs/operators';
import { Observable, of, pipe } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  //api del backend
  public api = environment.api;

  constructor(private http:HttpClient){ }


  //trae todos los hoteles
  GetHotel(){

    const url = this.api+'/busqueda';

    return this.http.get<Resp>(url).pipe(


      map(resp=>resp.hotel)

    )

  }

  //trae un hotel

  TraerOneHotel(id:string){

    const url = this.api+'/hotel/'+id;

    return this.http.get<any>(url).pipe(


      map(resp=>resp.hotel)

    )

  }


  //metodo para realizar el voto
  Votar(id:string,voto:number,comentarios:string){



    const url = this.api+'/hotel/'+id;
    const data = {

      score:voto,
      comentarios

    }

    return this.http.post<Boolean>(url,data).pipe(


      map(resp=>true),
      catchError(err=>of(false))

    )

  }


  //busca por precio

  BuscarPorPrecio(condicion:number){
    const url = this.api+'/busqueda/'+condicion;

    return this.http.get<any>(url).pipe(


      map(resp=>resp.hotel)

    )

  }

  //busca por categoria y puntuacion
  BuscarCategoriaPuntuacion(categoria=6,score=6){


    const url = `${this.api}/busqueda/${categoria}/${score}`;

    return this.http.get<any>(url).pipe(


      map(resp=>resp.hotel)

    )

  }




}
