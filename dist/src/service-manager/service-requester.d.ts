import { LitElement } from "lit";
import { Constructor } from "./constructor";
import { IServiceRequester } from "./service-requester.interface";
export declare const ServiceRequester: <T extends Constructor<LitElement>>(superClass: T) => Constructor<IServiceRequester> & T;
