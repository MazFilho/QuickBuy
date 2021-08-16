import { Component } from "@angular/core"


//Decorator
@Component({
  //selector: Tag da reinderizção
  selector: "app-produto",
  //HTML reinderização
  template: "<html><body>{{ obterNome() }}</body></html>"
})

// Convenção type scripit - Nome das classes começando com maíuscolu por conta da convenção PascalCase
export class ProdutoComponent {

// camelCase para variáveis, atributos, e nomes das funções / metodos 
  public nome: string;
  public liberadoParaVenda: boolean;

  public obterNome(): string {
    return "Samsung";
  }
}
