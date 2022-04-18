export const ServiceCreator = (superClass) => {
    class ProviderClass extends superClass {
        constructor(...args) {
            super(args[0]);
            this._instances = new Map();
            this.addGetServiceListener();
        }
        createService(key, instance) {
            this._instances.set(key, instance);
        }
        addGetServiceListener() {
            this.addEventListener('get-service', (event) => {
                const key = event.detail.key;
                if (this._instances.has(key)) {
                    event.detail.instance = this._instances.get(key);
                    event.stopPropagation();
                }
            });
        }
    }
    ;
    return ProviderClass;
};
//# sourceMappingURL=service-creator.js.map