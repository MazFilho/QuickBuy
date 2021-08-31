import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {

  public isExpanded: boolean = false;

  constructor(private router: Router) { }

  public collapse() {
    this.isExpanded = false;
  }

  public toggle() {
    this.isExpanded = !this.isExpanded;
  }

  public usuarioLogado(): boolean {
    //var usuarioLogado = sessionStorage.getItem("usuario-autenticado");
    //if (usuarioLogado == "1") {
    //  return true;
    //}
    //return false;
    return sessionStorage.getItem("usuario-autenticado") == "1"
  }

  public sair() {
    sessionStorage.setItem("usuario-autenticado", "");
    this.router.navigate(['/']);
  }
}
