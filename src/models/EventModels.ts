import IModel from "@/models/IModel";
import {Departments} from "@/helpers/constants";

export interface IEventSimple extends IModel{
    category: Departments;
    ts: string;
    title: string;
    subTitle: string;
}

export interface IEventListEntry extends IEventSimple {

}

export interface IEvent extends IEventListEntry {

}
