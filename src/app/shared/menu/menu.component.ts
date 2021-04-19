import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  items: any[];
  constructor() { }

  ngOnInit(): void {

    this.items = [
      {
        label:'Inicio',
        icon:'pi pi-fw pi-flag',
        routerLink:[''],
    },
      {
          label:'Crear Hotel',
          icon:'pi pi-fw pi-home',
          items:[
              {
                  label:'Registrar un hotel',
                  icon:'pi pi-fw pi-plus',
                  routerLink:['/hotel/createhotel'],
              },
              {
                  label:'Listar hoteles',
                  icon:'pi pi-fw pi-list',
                  routerLink:['/hotel'],
              },



          ]
      },
      {
        label:'Cuenta',
        icon:'pi pi-fw pi-user',

        items:[

            {
              label:'Salir',
              icon:'pi pi-fw pi-power-off',

          }
        ]
    },
    {
      label:'Iniciar Sesion',
      icon:'pi pi-fw pi-user',
      routerLink:['/auth'],


  },
  ];

  }

}
