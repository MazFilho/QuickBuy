import { Component, OnInit } from "@angular/core"
import { Usuario } from "../../modelo/usuario";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {

  public usuario: Usuario;

  public returnUrl: string;

  constructor(private router: Router,
              private activatedRouter: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.usuario = new Usuario();

    this.returnUrl = this.activatedRouter.snapshot.queryParams['returnUrl'];
    if (!this.returnUrl) {
      this.returnUrl = '/';
    }
  }

  public entrar(): void {
    if (this.usuario.email == "mike@easy.com" && this.usuario.senha == "1505") {
      sessionStorage.setItem("usuario-autenticado", "1");
      this.router.navigate([this.returnUrl]);
    }
  }

}
