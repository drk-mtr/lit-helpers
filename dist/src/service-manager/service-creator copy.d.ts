import { LitElement } from "lit";
import { Constructor } from "./constructor";
export interface IServiceCreator {
    provideInstance: (key: any, instance: any) => void;
}
export declare const ServiceCreator: <T extends Constructor<LitElement>>(superClass: T) => Constructor<IServiceCreator> & T;
