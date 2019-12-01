import { Component, OnInit } from '@angular/core';
import { EmpleadorService } from 'src/app/services/empleador.services';
@Component({
    selector: 'empleador-event',
    templateUrl: './empleador.component.html',
})
export class EmpleadorComponent implements OnInit {
    public empleadores = [];

    constructor(private empleadorService: EmpleadorService) {}
  
    ngOnInit(): void {
      this.empleadorService.getEmpleador().subscribe(data => {
        console.log({ data });
        this.empleadores = data;
      });
    }
}
