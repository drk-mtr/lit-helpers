export const ServiceRequester = (superClass) => {
    class RequesterClass extends superClass {
        requestInstance(key) {
            const event = new CustomEvent('request-instance', {
                detail: { key },
                bubbles: true,
                cancelable: true,
                composed: true
            });
            this.dispatchEvent(event);
            return event.detail.instance;
        }
    }
    ;
    return RequesterClass;
};
//# sourceMappingURL=service-requester%20copy.js.map