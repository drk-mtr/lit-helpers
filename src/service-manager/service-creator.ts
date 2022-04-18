import { LitElement } from "lit";
import { Constructor } from "./constructor";
import { IServiceCreator } from "./service-creator.interface";

export const ServiceCreator = <T extends Constructor<LitElement>>(superClass: T) => {
  class ProviderClass extends superClass {
    private _instances = new Map<string, any>();
    
    constructor(...args: any[]) {
      super(args[0]);
      this.addGetServiceListener();
    }

    public createService(key: string, instance: any) {
      this._instances.set(key, instance);
    }
    
    private addGetServiceListener() {
      this.addEventListener('get-service', (event: any) => {
        const key = event.detail.key;
        if (this._instances.has(key)) {
          event.detail.instance = this._instances.get(key);
          event.stopPropagation();
        }
      });
    }
  };
  
  return ProviderClass as Constructor<IServiceCreator> & T;
}