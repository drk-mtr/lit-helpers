import { LitElement } from "lit";
import { Constructor } from "./constructor";
export interface ServiceRequesterInterface {
    requestInstance: (key: any) => any;
}
export declare const ServiceRequester: <T extends Constructor<LitElement>>(superClass: T) => Constructor<ServiceRequesterInterface> & T;
