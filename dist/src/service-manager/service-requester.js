export const ServiceRequester = (superClass) => {
    class RequesterClass extends superClass {
        getServiceInstance(key) {
            var _a;
            const event = new CustomEvent('get-service', {
                detail: { key },
                bubbles: true,
                cancelable: true,
                composed: true
            });
            this.dispatchEvent(event);
            const customEvent = event;
            return (_a = customEvent.detail.instance) !== null && _a !== void 0 ? _a : null;
        }
    }
    ;
    return RequesterClass;
};
//# sourceMappingURL=service-requester.js.map