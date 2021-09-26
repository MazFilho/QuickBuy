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
  public mensagem: string;
  public spinner: boolean;

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
    this.spinner = true;
    this.usuarioServico.verificarUsuario(this.usuario)
    .subscribe(
      usuarioJson => {
        this.usuarioServico.usuario = usuarioJson;

        this.router.navigate([this.returnUrl]);
      },
      err => {
        console.log(err.error);
        this.mensagem = err.error;
        this.spinner = false;
      }
    );
  }

}
