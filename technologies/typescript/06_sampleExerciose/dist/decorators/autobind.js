export function Autobind(_, _2, descriptor) {
    const originalMethod = descriptor.value;
    const adjustedMethod = {
        configurable: true,
        enumerable: false,
        get() {
            const bindFunction = originalMethod.bind(this);
            return bindFunction;
        },
    };
    return adjustedMethod;
}
//# sourceMappingURL=autobind.js.map