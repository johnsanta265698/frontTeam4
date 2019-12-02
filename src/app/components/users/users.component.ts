import { Component, OnInit } from '@angular/core';
import { UsersServices } from 'src/app/services/users.services';
@Component({
    selector: 'users-event',
    templateUrl: './users.component.html',
})
export class UsersComponent implements OnInit {
  public usuarios = [];
  public headElements = ["Id","Documento", "Nombre", "Apellidos",  "Direccion", "Empresa", "Opciones"];
  public usuarioIndice = null;

  public nombreInput = "";
  public documentoInput = "";
  public apellidoInput = "";
  public empresaInput = "";
  public direccionInput = "";

    constructor(private usuariosService: UsersServices) {}
  
    ngOnInit(): void {
      this.usuariosService.getUsuarios().subscribe(data => {
        console.log({ data });
        this.usuarios = data;
      });
    }

    getUsuarios(): void {
      this.usuariosService.getUsuarios().subscribe(data => {
        console.log({ data });
        this.usuarios = data;
      });
    }
  
    deleteUsuario(indice: number): void {
      this.usuariosService.deleteUsuario(indice).subscribe(data => {
        console.log({ data });
        this.getUsuarios();
      });
    }
  
    createUsuario(): void {
      this.usuarioIndice = null;
      const nuevoUsuario: any = {
        numeroDocumento: this.documentoInput,
        nombre: this.nombreInput,
        apellido: this.apellidoInput,
        nombreEmpresa: this.empresaInput,
        direccion: this.direccionInput,

      };
      console.log("click createUsuario === ", { nuevoUsuario });
      this.usuariosService.createUsuario(nuevoUsuario).subscribe(data => {
        console.log({ data });
        this.getUsuarios();
      });
    }
  
    editUsuarioPopularForm(indice: number): void {
      this.usuarioIndice = indice;
      this.nombreInput = this.usuarios[indice].nombre;
    }
  
    guardarEdicionUsuario(): void {
      const usuarioEditado: any = {
        nombre: this.nombreInput || ""
      };
      this.usuariosService
        .editUsuario(this.usuarioIndice, usuarioEditado)
        .subscribe(data => {
          console.log({ data });
          this.getUsuarios();
        });
    }

}