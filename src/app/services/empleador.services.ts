import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import IEmpleador from "../interfaces/empleador";
import { Observable } from "rxjs";

@Injectable()
export class EmpleadorService {
  constructor(private http: HttpClient) {}

  getEmpleador(): Observable<IEmpleador[]> {
    return this.http.get<IEmpleador[]>(
      "https://bootcamp-dia-3.camilomontoyau.now.sh/usuarios"
    );
  }

  deleteEmpleador(indice: number): Observable<any>{
    return this.http.delete<any>(
      `https://bootcamp-dia-3.camilomontoyau.now.sh/usuarios/${indice}`
    )
  }

  createEmpleador(usuario: IEmpleador): Observable<IEmpleador>{
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    };
    return this.http.post<IEmpleador>(
      "https://bootcamp-dia-3.camilomontoyau.now.sh/usuarios",
      usuario,
      httpOptions
    )
  }
}