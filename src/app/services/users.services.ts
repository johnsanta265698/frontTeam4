import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import IUsuario from "../interfaces/users";
import { Observable } from "rxjs";

@Injectable()
export class UsersServices {
  constructor(private http: HttpClient) {}
  private _empleado = "http://localhost:8080/heinsohnv2-api/rest/v2/empleados"
  getUsuarios(): Observable<IUsuario[]> {
    return this.http.get<IUsuario[]>(
      `${this._empleado}`
      //"https://bootcamp-dia-3.camilomontoyau.now.sh/usuarios"
    );
  }

  deleteUsuario(indice: number): Observable<any>{
    return this.http.delete<any>(
      `${this._empleado}?numeroDocumento=${indice}`
      //`https://bootcamp-dia-3.camilomontoyau.now.sh/usuarios/${indice}`
    );
  }

  createUsuario(usuario: IUsuario): Observable<IUsuario> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    };
    return this.http.post<IUsuario>(
      `${this._empleado}`,
      //"https://bootcamp-dia-3.camilomontoyau.now.sh/usuarios",
      usuario,
      httpOptions
    );
  }

  editUsuario(indice: number, usuario: IUsuario): Observable<IUsuario>{
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    };

    return this.http.put<IUsuario>(
      `${this._empleado}/usuarios`,
      usuario,
      httpOptions
    )
  }
}