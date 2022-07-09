import { User } from "./User"

export class Room{
    users : Array<User>;
    admins : Array<User>;
    id : string;
    name : string;



    constructor(id : string,name : string,admin : User){
        this.id = id;
        this.name = name;
        this.users = new Array<User>(admin);
        this.admins = new Array<User>(admin);
    }

    //These two methods needs to be called by an admin

    addUser(user : User) : void {
        this.users.push(user);
    }

    getUsers() : Array<User> {
        return this.users;
    }
    
    
    getAdmins() : Array<User> {
        return this.admins;
    }
    
    removeUser(user : User) : void{
        this.users = this.users.filter(elem => elem != user);
    }
}