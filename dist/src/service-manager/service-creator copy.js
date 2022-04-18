export const ServiceCreator = (superClass) => {
    class ProviderClass extends superClass {
        constructor() {
            super(...arguments);
            this._instances = new Map();
        }
        connectedCallback() {
            super.connectedCallback();
            this.addRequestInstanceListener();
        }
        addRequestInstanceListener() {
            this.addEventListener('request-instance', (event) => {
                const key = event.detail.key;
                if (this._instances.has(key)) {
                    event.detail.instance = this._instances.get(key);
                    event.stopPropagation();
                }
            });
        }
        provideInstance(key, instance) {
            this._instances.set(key, instance);
        }
    }
    ;
    return ProviderClass;
};
//# sourceMappingURL=service-creator%20copy.js.map