/**
 * Created by david on 11/27/2016.
 */
import {Component, OnInit} from "@angular/core";
import { User } from "../../../../both/models/demo.model";
import template from "./wishlist.component.html";
import {LoginService} from "../app-login.service";
import {Wishlist} from "../../../../both/models/wishlist.model";
import {WishlistDataService} from "./wishlist-data.service";
import {FormBuilder, Validators, Form} from "@angular/forms";
import {Router} from "@angular/router";
import {Observable} from "rxjs";

@Component({
    selector: "wishlist",
    template
})

export class WishlistComponent implements OnInit{
    currentUser: User;
    wishlist: Wishlist;
    data: Observable<Wishlist[]>;

    public addToWishlistForm = this.fb.group({
       item:["", Validators.required]
    });

    constructor(private router : Router, public fb: FormBuilder, private loginService: LoginService, private wishlistDataService: WishlistDataService){

    }

    ngOnInit(){
        this.currentUser = this.loginService.getLogin();
        this.wishlist = this.wishlistDataService.getWishlistForUser(this.currentUser.name);
    }

    addToWishlist(event):void{
        if(this.addToWishlistForm.valid){
            this.wishlistDataService.addWishlistItem(this.wishlist, this.addToWishlistForm.value.item);
            this.wishlist.Items.push(this.addToWishlistForm.value.item);

            this.addToWishlistForm.reset();
        }
    }

    deleteItem(item:string):void{
        this.wishlistDataService.deleteWishlistItem(this.wishlist, item);
        var index = this.wishlist.Items.indexOf(item);
        if(index > -1){
            this.wishlist.Items.splice(index, 1);
        }
    }
}