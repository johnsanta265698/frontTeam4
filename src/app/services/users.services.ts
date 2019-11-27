import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import IUsuario from "../interfaces/users";
import { Observable } from "rxjs";

@Injectable()
export class UsersServices {
  constructor(private http: HttpClient) {}

  getUsuarios(): Observable<IUsuario[]> {
    return this.http.get<IUsuario[]>(
      "https://bootcamp-dia-3.camilomontoyau.now.sh/usuarios"
    );
  }
}