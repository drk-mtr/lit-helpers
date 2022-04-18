import { LitElement } from "lit";
import { Constructor } from "./constructor";
export declare class RequesterInterface {
    requestInstance: (key: any) => any;
}
export declare const Requester: <T extends Constructor<LitElement>>(superClass: T) => Constructor<RequesterInterface> & T;
