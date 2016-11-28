import {UserCollection} from "../../../both/collections/demo.collection";
import {User} from "../../../both/models/demo.model";
import {WishlistCollection} from "../../../both/collections/wishlist.collection";
import {Wishlist, WishlistItem} from "../../../both/models/wishlist.model";

export class Main {
  start(): void {
    UserCollection.remove({});
    WishlistCollection.remove({});
    this.initFakeData();
  }

  users: User[];
  wishlists: Wishlist[];
  wishlistItems: WishlistItem[];

  initFakeData(): void {
    this.users = [{
      name: "David"
    }, {
      name: "Luke"
    }, {
      name: "Matt"
    }];
    this.users.forEach((obj: User) => {
      UserCollection.insert(obj);
    });

    this.wishlistItems = [{
      itemName : "Surface Book",
      isReserved: false
    },{
      itemName: "OnePlus3T",
      isReserved: false
    },{
      itemName: "Gotham",
      isReserved: false
    },{
      itemName: "Agents of Shield",
      isReserved: false
    },{
      itemName:"American Horror Story",
      isReserved: false,
    },{
      itemName: "Green Arrow",
      isReserved: false
    }];

    this.wishlists = [{
      Username: this.users[0].name,
      Items: ["Surface Book", "OnePlus3T"],
      ReservableItems: [this.wishlistItems[0], this.wishlistItems[1]]
    }, {
      Username: this.users[1].name,
      Items: ["Gotham", "Agents of Shield"],
      ReservableItems: [this.wishlistItems[2], this.wishlistItems[3]]
    }, {
      Username: this.users[2].name,
      Items: ["American Horror Story", "Green Arrow"],
      ReservableItems: [this.wishlistItems[4], this.wishlistItems[5]]
    }];
    this.wishlists.forEach((obj: Wishlist) => {
      WishlistCollection.insert(obj);
    });
  }
}

