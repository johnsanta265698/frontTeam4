import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import IEmpleador from "../interfaces/empleador";
import { Observable } from "rxjs";

@Injectable()
export class EmpleadorService {
  constructor(private http: HttpClient) {}
  private _empleador = "localhost:8080/heinsohn-api/rest/v2/empleadores"
  getEmpleador(): Observable<IEmpleador[]> {
    return this.http.get<IEmpleador[]>(
      `${this._empleador}`
      //"https://bootcamp-dia-3.camilomontoyau.now.sh/usuarios"
    );
  }

  deleteEmpleador(indice: number): Observable<any>{
    return this.http.delete<any>(
      `${this._empleador}/${indice}`
      //`https://bootcamp-dia-3.camilomontoyau.now.sh/usuarios/${indice}`
    )
  }

  createEmpleador(empleador: IEmpleador): Observable<IEmpleador>{
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    };
    return this.http.post<IEmpleador>(
      `${this._empleador}`,
      //"https://bootcamp-dia-3.camilomontoyau.now.sh/usuarios",
      empleador,
      httpOptions
    )
  }

  editEmpleador(indice: number, empleador: IEmpleador): Observable<IEmpleador>{
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    };

    return this.http.put<IEmpleador>(
      `${this._empleador}/empleador/${indice}`,
      empleador,
      httpOptions
    )
  }
}