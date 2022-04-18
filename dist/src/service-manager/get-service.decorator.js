export function getService(serviceName) {
    return function (target, propertyKey) {
        let customEvent;
        target.firstUpdated = function () {
            const event = new CustomEvent('get-service', {
                detail: { key: serviceName },
                bubbles: true,
                cancelable: true,
                composed: true
            });
            this.dispatchEvent(event);
            customEvent = event;
            return target.firstUpdated;
        };
        return Object.defineProperty(target, propertyKey, {
            set: () => undefined,
            get: () => { var _a, _b; return (_b = (_a = customEvent === null || customEvent === void 0 ? void 0 : customEvent.detail) === null || _a === void 0 ? void 0 : _a.instance) !== null && _b !== void 0 ? _b : null; }
        });
    };
}
//# sourceMappingURL=get-service.decorator.js.map