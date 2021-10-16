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

    constructor(private usuarioServico: UsuarioServico) { }

    ngOnInit() {
        this.usuario = new Usuario();
    }

    public cadastrar() {
        // this.usuarioServico.cadastrarUsuario(this.usuario)
        //     .subscribe(
        //         usuarioJson => { },
        //         e => { }
        //     );
    }
}