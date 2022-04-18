import { LitElement } from "lit";
import { Constructor } from "./constructor";
export interface RequesterInterface {
    requestInstance: (key: any) => any;
}
export declare const Requester: <T extends Constructor<LitElement>>(superClass: T) => Constructor<RequesterInterface> & T;
