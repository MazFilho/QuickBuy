import { Component, OnInit } from "@angular/core";
import { UsuarioServico } from "../../servicos/usuario/usuario.servico";
import { Usuario } from "../../modelo/usuario";

@Component({
    selector: "cadastro-usuario",
    templateUrl: "./cadastro.usuario.component.html",
    styleUrls: ["./cadastro.usuario.component.css"]
})
export class CadastroUsuarioComponent implements OnInit {

    public usuario: Usuario;
    public spinner: boolean;
    public mensagem: string;
    public usuarioCadastrado: boolean;

    constructor(private usuarioServico: UsuarioServico) { }

    ngOnInit() {
        this.usuario = new Usuario();
    }

    public cadastrar() {
        this.spinner = true;
        this.usuarioServico.cadastrarUsuario(this.usuario)
            .subscribe(
                usuarioJson => {
                    this.usuarioCadastrado = true;
                    this.mensagem = "";
                    this.spinner = false;
                },
                e => {
                    this.mensagem = e.error;
                    this.spinner = false;
                }
            );
    }
}