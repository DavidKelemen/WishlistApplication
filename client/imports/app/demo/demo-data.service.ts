import { Injectable } from "@angular/core";
import { ObservableCursor } from "meteor-rxjs";
import { User } from "../../../../both/models/demo.model";
import { UserCollection } from "../../../../both/collections/demo.collection";

@Injectable()
export class DemoDataService {
  private data: ObservableCursor<User>;

  constructor() {
    this.data = UserCollection.find({});
  }

  public getData(): ObservableCursor<User> {
    return this.data;
  }

  public getUser(name: string): User{
    return UserCollection.findOne({name: name});
  }

  public insertUser(_name: string): void{
      let user: User ={
        name: _name
      };
      UserCollection.insert(user);
  }

}
