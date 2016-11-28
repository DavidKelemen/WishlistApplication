import { Component } from "@angular/core";
import template from "./app.component.html";
import style from "./app.component.scss";
import {LoginService} from "./app-login.service";
import {WishlistDataService} from "./wishlist/wishlist-data.service";

@Component({
  selector: "app",
  template,
  styles: [ style ]
})
export class AppComponent{
  constructor(loginService: LoginService, wishlistDataService: WishlistDataService) {
  }


}
