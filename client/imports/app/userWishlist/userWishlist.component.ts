/**
 * Created by david on 11/27/2016.
 */
import {Component, OnInit, OnDestroy} from "@angular/core";
import template from "./userWishlist.component.html";
import {LoginService} from "../app-login.service";
import {Wishlist, WishlistItem} from "../../../../both/models/wishlist.model";
import {WishlistDataService} from "../wishlist/wishlist-data.service";
import {ActivatedRoute} from "@angular/router";
import {User} from "../../../../both/models/demo.model";


@Component({
    selector: "userWishlist",
    template
})

    export class UserWishlistComponent implements OnInit, OnDestroy {
    loggedInUser: User;
    wishlist: Wishlist;
    sub;
    name: string;

    constructor(public loginService: LoginService, public wishlistService: WishlistDataService, private route: ActivatedRoute){

    }

    ngOnInit():void{
        this.loggedInUser = this.loginService.getLogin();
        this.sub = this.route.params.subscribe(params =>{
           this.name = params['username'];
        });

        this.wishlist = this.wishlistService.getWishlistForUser(this.name);
    }

    ngOnDestroy():void{
        this.sub.unsubscribe();
    }

    setReserved(item: WishlistItem){
        item.isReserved= true;
        this.wishlistService.reserveItem(this.wishlist, item);
    }

}
