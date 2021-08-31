import { Component } from "@angular/core"
import { Usuario } from "../../modelo/usuario";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent {

  public usuario: Usuario;

  constructor(private router: Router) {
   this.usuario = new Usuario();
  }

  public entrar(): void {
    if (this.usuario.email == "mike@easy.com" && this.usuario.senha == "1505") {
      sessionStorage.setItem("usuario-autenticado", "1");
      this.router.navigate(['/']);
    }
  }

}
