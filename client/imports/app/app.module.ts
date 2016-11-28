import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { DemoComponent } from "./demo/demo.component";
import { DemoDataService } from "./demo/demo-data.service";
import {ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {WishlistComponent} from "./wishlist/wishlist.component";

import {routes} from './app.routes';
import {WishlistDataService} from "./wishlist/wishlist-data.service";
import {LoginService} from "./app-login.service";
import {UserWishlistComponent} from "./userWishlist/userWishlist.component";

@NgModule({
  // Components, Pipes, Directive
  declarations: [
    AppComponent,
    DemoComponent,
    WishlistComponent,
    UserWishlistComponent
  ],
  imports: [
      BrowserModule,
      ReactiveFormsModule,
      RouterModule.forRoot(routes)
  ],
  // Entry Components
  entryComponents: [
    AppComponent
  ],
  exports:[
    RouterModule
  ],
  // Providers
  providers: [
    DemoDataService,
    WishlistDataService,
    LoginService
  ],
  // Main Component
  bootstrap: [ AppComponent ]
})
export class AppModule {

}
