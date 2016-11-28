/**
 * Created by david on 11/27/2016.
 */
import { Injectable } from "@angular/core";
import {User} from "../../../both/models/demo.model";


@Injectable()
export class LoginService{
    public loggedInUser: User;

    public setLogin(user:User): void{
        this.loggedInUser = user;
    }

    public getLogin():User{
        return this.loggedInUser;
    }

}