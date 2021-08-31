import { Component } from "@angular/core"
import { Usuario } from "../../modelo/usuario";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls:["./login.component.css"]
})

export class LoginComponent {

  public usuario: Usuario;

  constructor() {
   this.usuario = new Usuario();
  }

  public entrar(): void {
    if (this.usuario.email == "mike@easy.com" && this.usuario.senha == "1505") {
    }
  }

}
