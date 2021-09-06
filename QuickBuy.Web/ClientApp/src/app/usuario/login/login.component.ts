import { Component, OnInit } from "@angular/core"
import { Usuario } from "../../modelo/usuario";
import { ActivatedRoute, Router } from "@angular/router";
import { UsuarioServico } from "../../servicos/usuario/usuario.servico";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {

  public usuario: Usuario;

  public returnUrl: string;

  constructor(private usuarioServico: UsuarioServico,
              private router: Router,
              private activatedRouter: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.usuario = new Usuario();

    this.returnUrl = this.activatedRouter.snapshot.queryParams['returnUrl'];
    if (!this.returnUrl) {
      this.returnUrl = '/';
    }
  }

  public entrar() {
    this.usuarioServico.verificarUsuario(this.usuario)
    .subscribe(
      data => {
        console.log(data);
      },
      err => {
        console.log(err.error);
      }
    );
  }

}
