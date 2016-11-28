import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { DemoDataService } from "./demo-data.service";
import { User } from "../../../../both/models/demo.model";
import template from "./demo.component.html";
import style from "./demo.component.scss";
import {FormBuilder, Validators} from "@angular/forms";
import {LoginService} from "../app-login.service";
import{WishlistDataService} from "../wishlist/wishlist-data.service";

@Component({
  selector: "demo",
  template,
  styles: [ style ]
})

export class DemoComponent implements OnInit {
  greeting: string;
  loggedInUser: User;
  data: Observable<User[]>;


  public loginForm = this.fb.group({
    name: ["", Validators.required]
  });

    constructor(private wishlistService: WishlistDataService,public fb: FormBuilder, private demoDataService: DemoDataService, public loginService: LoginService) {
  }

  login(event): void{
    if(this.loginForm.valid){
      let user = this.demoDataService.getUser(this.loginForm.value.name);

      if(!user){

        this.demoDataService.insertUser(this.loginForm.value.name);

        this.wishlistService.insertWishlist(this.loginForm.value.name);
        this.loginService.setLogin(this.loginForm.value);
        this.loggedInUser = this.loginForm.value;
      }
      else{
        this.loginService.setLogin(user);
        this.loggedInUser = user;
      }
      this.loginForm.reset();
    }
  }

  ngOnInit() {
    this.data = this.demoDataService.getData().zone();
    this.loggedInUser = this.loginService.getLogin();
  }
}
