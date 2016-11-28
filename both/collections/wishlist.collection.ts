/**
 * Created by david on 11/27/2016.
 */
import {MongoObservable} from "meteor-rxjs";
import {Wishlist} from "../models/wishlist.model";

export const WishlistCollection = new MongoObservable.Collection<Wishlist>("wishlists");