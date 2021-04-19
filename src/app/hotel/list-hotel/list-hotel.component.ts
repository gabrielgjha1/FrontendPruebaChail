import { Component, OnInit } from '@angular/core';
import { Hotel } from 'src/app/interfaces/hotel.interface';
import { HotelService } from 'src/app/services/hotel/hotel.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-hotel',
  templateUrl: './list-hotel.component.html',
  styleUrls: ['./list-hotel.component.css']
})
export class ListHotelComponent implements OnInit {
  public hotel:Hotel[];
  constructor( private _hotelservice:HotelService    ) { }

  ngOnInit(): void {

    this.Hoteles();

  }

  Hoteles(){

    this._hotelservice.GetHotel().subscribe((resp:Hotel[])=>{


      this.hotel=resp;
    })

  }

  eliminar(id:string){

    Swal.fire({
      title: 'Esta seguro que desea borrar el hotel?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {

        this._hotelservice.BorrarHotel(id).subscribe(resp=>{



          if (resp){

            Swal.fire(
              'Buen trabajo!',
              'El hotel fue borrado con exito .',
              'success'
            )

            this.Hoteles();

          }else{

            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Error al borrar, consulta con el administrador!',
            });

          }



        })

      }
    })



  }

}
