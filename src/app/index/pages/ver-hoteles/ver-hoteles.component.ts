import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hotel } from 'src/app/interfaces/hotel.interface';
import { HotelService } from 'src/app/services/hotel/hotel.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ver-hoteles',
  templateUrl: './ver-hoteles.component.html',
  styleUrls: ['./ver-hoteles.component.css']
})
export class VerHotelesComponent implements OnInit {
  spinner:boolean=true;
  desactivarBoton:boolean=false;
  constructor(private activaterouter:ActivatedRoute, private hotelservice:HotelService) { }
  hotel:Hotel;
  vote:number;
  comentario:string;
  images: any[];
  responsiveOptions:any[] = [
    {
        breakpoint: '1024px',
        numVisible: 3
    },
    {
        breakpoint: '768px',
        numVisible: 2
    },
    {
        breakpoint: '560px',
        numVisible: 1
    }
];

  ngOnInit(): void {

    //trae los hoteles
    this.TraerHotel();

  }


  //comprueba si un usuario ya hizo un voto, en ese caso no se le permite volver a votar
  comprobarVoto(){

    if (localStorage.getItem(this.hotel._id)){
      console.log('object');
      this.desactivarBoton=true;

    }

  }


  //trae los hoteles
  TraerHotel(){

    //obtiene el id del url
    this.activaterouter.params.subscribe(({id})=>{


      //trae el hotel por el id
      this.hotelservice.TraerOneHotel(id).subscribe((resp:Hotel)=>{
        this.spinner=false;


        this.hotel = resp;

        //almacena las imagenes que vienen del backen en this.imagen para mostrar en la galeria
        this.images=[resp.pictureOne,resp.pictureThree,resp.pictureTwo]
        console.log(this.images);


        //llama la funcion comprobar voto para ocultar el boton de enviar
        this.comprobarVoto();
      })


    })


  }


  //metodo para votar
  votar(id:string){



    //valida que el campo de voyo y comentario esten llenos
    if (!this.vote && !this.comentario){
      return Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Debes colocar un comentario y una puntuación!',
      })

    }


    //verifica si el usuario ya voto
    if (localStorage.getItem(this.hotel._id)){

      return Swal.fire(
        'Ya voto por este hotel!',
        'Click aqui para continuar!',
        'success'
      )

    }


    this.hotelservice.Votar(id,this.vote,this.comentario).subscribe((resp)=>{




      if(resp){

        Swal.fire(
          'Buen trabajo su voto fue hecho con exito!',
          'Click aqui para continuar!',
          'success'
        )



        this.TraerHotel();

        // almacena en el localstore el id del hotel para verificar despues si el usuario ya voto
        localStorage.setItem(this.hotel._id,'voto hecho');

      }


    })


  }




}
