export const Requester = (superClass) => {
    class RequesterClass extends superClass {
        requestInstance(key) {
            const event = new CustomEvent('request-instance', {
                detail: { key },
                bubbles: true,
                cancelable: true,
                composed: true
            });
            this.dispatchEvent(event);
            const instance = event.detail.instance;
            console.log(instance);
            return instance;
        }
    }
    ;
    return RequesterClass;
};
//# sourceMappingURL=requester.js.map