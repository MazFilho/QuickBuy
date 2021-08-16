import { Component } from "@angular/core"

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls:["./login.component.css"]
})

export class LoginComponent {

  public email: string = "mike@teste.com";

  constructor() { }

}
