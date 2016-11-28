/**
 * Created by david on 11/27/2016.
 */
import { Injectable } from "@angular/core";
import {ObservableCursor} from "meteor-rxjs";
import {Wishlist, WishlistItem} from "../../../../both/models/wishlist.model";
import {WishlistCollection} from "../../../../both/collections/wishlist.collection";
import {BehaviorSubject} from "rxjs";

@Injectable()
export class WishlistDataService{
    private data: ObservableCursor<Wishlist>;

    constructor(){
        this.data = WishlistCollection.find({});
    }

    public getData(): ObservableCursor<Wishlist>{
        return this.data;
    }

    public getWishlistForUser(name: string): Wishlist{
        return WishlistCollection.findOne({"Username" : name});
    }

    public insertWishlist(_name: string): void{
        let wishlist: Wishlist ={
            Username : _name,
            Items: [],
            ReservableItems: []
        };

        WishlistCollection.insert(wishlist);
    }

    public addWishlistItem(wishlist: Wishlist, item: string) {
        WishlistCollection.update(
            {"_id" : wishlist._id},
            {
                $push: {"Items": item, "ReservableItems": {"itemName": item, "isReserved": false}}
            });
    }

    deleteWishlistItem(wishlist: Wishlist, item: string) {
        WishlistCollection.update(
            {"_id" : wishlist._id},
            {
                $pull: {"Items" : item, "ReservableItems": {"itemName": item}},
            }
        );
    }

    reserveItem(wishlist: Wishlist, item: WishlistItem) {
        var obj = {};
        var index = wishlist.ReservableItems.indexOf(item);
        obj["ReservableItems." + index + ".isReserved"] = true;
        WishlistCollection.update(
            {"_id" : wishlist._id},
            {$set: obj}
        );
    }
}