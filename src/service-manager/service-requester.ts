import { LitElement } from "lit";
import { Constructor } from "./constructor";
import { IServiceRequester } from "./service-requester.interface";

export const ServiceRequester = <T extends Constructor<LitElement>>(superClass: T) => {
  class RequesterClass extends superClass {
    getServiceInstance(key: any) {
      const event = new CustomEvent('get-service', {
        detail: { key },
        bubbles: true,
        cancelable: true,
        composed: true
      });
      
      this.dispatchEvent(event);

      const customEvent = event as CustomEvent;

      return customEvent.detail.instance ?? null;
    }
  };
  
  return RequesterClass as Constructor<IServiceRequester> & T;
}