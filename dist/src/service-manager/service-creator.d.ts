import { LitElement } from "lit";
import { Constructor } from "./constructor";
import { IServiceCreator } from "./service-creator.interface";
export declare const ServiceCreator: <T extends Constructor<LitElement>>(superClass: T) => Constructor<IServiceCreator> & T;
