import { Inject, Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Produto } from "../../modelo/produto";
import { Observable } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class ProdutoServico {

    private _baseUrl: string;

    constructor(
        @Inject('BASE_URL') public baseUrl: string,
        private http: HttpClient,
    ) { 
        this._baseUrl = baseUrl;
    }

    public cadastrar(produto: Produto): Observable<Produto> {

        const headers = new HttpHeaders().set('content-type', 'application/json');

        var body: Produto = {
            nome: produto.nome,
            descricao: produto.descricao,
            preco: produto.preco
        }
        return this.http.post<Produto>(this._baseUrl + "api/produto/cadastrar", body, { headers });
    }

    public salvar(produto: Produto): Observable<Produto> {

        const headers = new HttpHeaders().set('content-type', 'application/json');

        var body: Produto = {
            nome: produto.nome,
            descricao: produto.descricao,
            preco: produto.preco
        }
        return this.http.post<Produto>(this._baseUrl + "api/produto/salvar", body, { headers });
    }

    public deletar(produto: Produto): Observable<Produto> {

        const headers = new HttpHeaders().set('content-type', 'application/json');

        var body: Produto = {
            nome: produto.nome,
            descricao: produto.descricao,
            preco: produto.preco
        }
        return this.http.post<Produto>(this._baseUrl + "api/produto/deletar", body, { headers });
    }



}