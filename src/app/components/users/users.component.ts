import { Component, OnInit } from '@angular/core';
import { UsersServices } from 'src/app/services/users.services';
@Component({
    selector: 'users-event',
    templateUrl: './users.component.html',
})
export class UsersComponent implements OnInit {
  public usuarios = [];
  public headElements = ["Id","Documento", "Nombre", "Apellidos", "Direccion", "Telefono", "Empresa", "Opciones"];
  public usuarioIndice = null;

  public nombreInput = "";

    constructor(private usuariosService: UsersServices) {}
  
    ngOnInit(): void {
      this.usuariosService.getUsuarios().subscribe(data => {
        console.log({ data });
        this.usuarios = data;
      });
    }

}