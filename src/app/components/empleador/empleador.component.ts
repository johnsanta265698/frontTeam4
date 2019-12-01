import { Component, OnInit } from '@angular/core';
import { EmpleadorService } from 'src/app/services/empleador.services';
@Component({
    selector: 'empleador-event',
    templateUrl: './empleador.component.html',
})
export class EmpleadorComponent implements OnInit {
    public empleadores = [];
    public headElements = ["Id","Documento", "Nombre", "Actividad", "Email", "Direccion", "Teléfono", "Opciones"];
    public empleadorIndice = null;

    public nombreInput = "";

    constructor(private empleadorService: EmpleadorService) {}
  
    ngOnInit(): void {
      this.empleadorService.getEmpleador().subscribe(data => {
        console.log({ data });
        this.empleadores = data;
      });
    }

    getEmpleador(): void {
        this.empleadorService.getEmpleador().subscribe(data => {
          console.log({ data });
          this.empleadores = data;
        });
      }
    
      deleteEmpleador(indice: number): void {
        this.empleadorService.deleteEmpleador(indice).subscribe(data => {
          console.log({ data });
          this.getEmpleador();
        });
      }
    
      createEmpleador(): void {
        this.empleadorIndice = null;
        const nuevoUsuario: any = {
          nombre: this.nombreInput || ""
        };
        console.log("click createUsuario === ", { nuevoUsuario });
        this.empleadorService.createEmpleador(nuevoUsuario).subscribe(data => {
          console.log({ data });
          this.getEmpleador();
        });
      }
    
      editEmpleadorPopularForm(indice: number): void {
        this.empleadorIndice = indice;
        this.nombreInput = this.empleadores[indice].nombre;
      }
    
      guardarEdicionEmpleador(): void {
        const empleadorEditado: any = {
          nombre: this.nombreInput || ""
        };
        this.empleadorService
          .editEmpleador(this.empleadorIndice, empleadorEditado)
          .subscribe(data => {
            console.log({ data });
            this.getEmpleador();
          });
      }
}
