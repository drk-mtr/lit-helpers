export function getService(serviceName: string) {
  return function (target: any, propertyKey: string) {
    let customEvent: CustomEvent;
    
    target.firstUpdated = function() {
      const event: Event = new CustomEvent('get-service', {
        detail: { key: serviceName },
        bubbles: true,
        cancelable: true,
        composed: true
      });
      this.dispatchEvent(event);
      customEvent = event as CustomEvent;
      return target.firstUpdated;
    }

    return Object.defineProperty(target, propertyKey, {
      set: () => undefined,
      get: () => customEvent?.detail?.instance ?? null
    });
  };
}