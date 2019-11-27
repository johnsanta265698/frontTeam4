import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import IEmpleador from "../interfaces/empleador";
import { Observable } from "rxjs";

@Injectable()
export class UsuariosService {
  constructor(private http: HttpClient) {}

  getUsuarios(): Observable<IEmpleador[]> {
    return this.http.get<IEmpleador[]>(
      "https://bootcamp-dia-3.camilomontoyau.now.sh/usuarios"
    );
  }
}