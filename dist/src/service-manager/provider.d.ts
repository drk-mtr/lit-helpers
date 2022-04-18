import { LitElement } from "lit";
import { Constructor } from "./constructor";
export interface ProviderInterface {
    provideInstance: (key: any, instance: any) => void;
}
export declare const Provider: <T extends Constructor<LitElement>>(superClass: T) => Constructor<ProviderInterface> & T;
