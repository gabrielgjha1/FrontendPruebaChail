import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HotelService } from 'src/app/services/hotel/hotel.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-create-hotel',
  templateUrl: './create-hotel.component.html',
  styleUrls: ['./create-hotel.component.css']
})
export class CreateHotelComponent implements OnInit {

  spinner:boolean=false;

  imagen1:File = null;
  imagen2:File = null;
  imagen3:File = null;
  public formulario:FormGroup = this.fb.group({

    hotelname:['',[Validators.required]],
    price:[,[Validators.required,Validators.min(1)]],
    category:[,[Validators.required,Validators.min(1),Validators.max(5)]],

  });

  constructor(private fb:FormBuilder,private _HotelService:HotelService) { }

  ngOnInit(): void {
  }



  ValidarCampo(campo:string){

    return this.formulario.controls[campo].invalid  &&  this.formulario.controls[campo].touched;

  }

  imageOne(event) {
    this.imagen1 = event.currentFiles[0];

  }

  imageTwo(event) {
    this.imagen2 = event.currentFiles[0];


  }

  imageThree(event) {
    this.imagen3 = event.currentFiles[0];

  }

  EnviarFormulario(){

    if (this.formulario.invalid){

    return  this.formulario.markAllAsTouched();

    }


    if (this.ValidarImagenes()){

     return Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Debe ingresar las 3 imagenes para registrar el hotel!',

      })

    }

    this.spinner=true;


    this._HotelService.GuardarHotel(this.formulario.value).subscribe((resp)=>{

      this.GuardarImagenes(resp._id);


    });


  }


  ValidarImagenes(){

    if (this.imagen1 && this.imagen2 && this.imagen3 ){

      return false;

    }

    return true

  }

  GuardarImagenes(id:string){

    var formdata =  new FormData();;

    formdata.append('pictureOne',this.imagen1);
    formdata.append('pictureTwo',this.imagen2);
    formdata.append('pictureThree',this.imagen3);

    this._HotelService.GuardarImagen(id,formdata).subscribe(resp=>{

      Swal.fire(
        'Buen trabajo!',
        'Hotel creado con exito!',
        'success'
      )

      this.imageOne

      this.imagen1 = null;
      this.imagen2 = null;
      this.imagen3 = null;
      this.spinner=false;
        this.formulario.reset()

    })


  }


}
