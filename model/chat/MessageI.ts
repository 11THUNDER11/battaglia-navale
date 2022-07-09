import { User } from "./User";

export interface MessageI{
    getSender() : User;
    getTime() : Date;

}