import IModel from "@/models/IModel";
import {Departments} from "@/helpers/constants";

export interface IEventSimple extends IModel{
    department: Departments;
    timestamp: string;
    title: string;
    host: string;
}

export interface IEventListEntry extends IEventSimple {

}

export interface IEvent extends IEventListEntry {

}
