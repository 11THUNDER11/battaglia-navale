import { Message } from "./Message";
import { User } from "./User";

export class TextMessage extends Message {
    
    content : string;
    
    constructor(sender : User,content : string){
        super(sender);
        this.content = content;
    }
}