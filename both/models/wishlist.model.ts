/**
 * Created by david on 11/27/2016.
 */
import {CollectionObject} from "./collection-object.model";

export interface Wishlist extends CollectionObject{
    Username: string;
    Items: string[];
    ReservableItems: WishlistItem[];
}

export interface WishlistItem{
    itemName:string;
    isReserved:boolean;
}