/**
 * Created by david on 11/27/2016.
 */
import {Route} from "@angular/router";

import {DemoComponent} from './demo/demo.component';
import {WishlistComponent} from './wishlist/wishlist.component';
import {UserWishlistComponent} from "./userWishlist/userWishlist.component";

export const routes: Route[] = [
    {path: '', component: DemoComponent, },
    {path: 'wishlist', component: WishlistComponent},
    {path: 'wishlist/:username', component: UserWishlistComponent}
];