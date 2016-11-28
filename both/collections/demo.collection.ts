import { MongoObservable } from "meteor-rxjs";
import {User} from "../models/demo.model";

export const UserCollection = new MongoObservable.Collection<User>("users");
