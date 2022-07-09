import { User } from "./User";

export abstract class Message{
    sender : User;
    time : Date;
    checked : boolean;
     
    constructor(sender:User){
        this.sender = sender;
        this.time = new Date();
        this.checked = false;
    }

}
