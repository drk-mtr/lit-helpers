import { LitElement } from "lit";
import { Constructor } from "./constructor";
export declare class ProviderInterface {
    provideInstance: (key: any, instance: any) => void;
}
export declare const Provider: <T extends Constructor<LitElement>>(superClass: T) => Constructor<ProviderInterface> & T;
