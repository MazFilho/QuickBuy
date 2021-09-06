import { Injectable, Inject } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Usuario } from "../../modelo/usuario";

@Injectable({
  providedIn: "root"
})
export class UsuarioServico {

  private baseURL: string;
  private _usuario: Usuario;

  set usuario(usuario: Usuario) {
    sessionStorage.setItem("usuario-autenticado", JSON.stringify(usuario));
    this._usuario = usuario;
  }

  get usuario(): Usuario {
    let usuarioJson = sessionStorage.getItem("usuario-autenticado");
    this._usuario = JSON.parse(usuarioJson);
    return this._usuario;
  }

  public usuarioAutenticado(): boolean {
    return !!(this._usuario && this._usuario.email && this._usuario.senha);
  }

  public limparSessao() {
    sessionStorage.setItem("usuario-autenticado", "");
    this._usuario = null;
  }

  constructor(
    @Inject('BASE_URL') baseUrl: string,
    private http: HttpClient
  ) {
    this.baseURL = baseUrl;
   }

   public verificarUsuario(usuario: Usuario): Observable<Usuario> {
    const headers = new HttpHeaders().set('content-type', 'application/json');
    var body = {
      email: usuario.email,
      senha: usuario.senha
    }
    return this.http.post<Usuario>(this.baseURL + 'api/usuario/verificarUsuario', body, { headers });
   }

}
