//? Autobind decorator
export function Autobind(
  _: any,
  _2: string | Symbol,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;
  const adjustedMethod: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    get() {
      //this will be triggered when the method is called
      const bindFunction = originalMethod.bind(this); // and then it will bind this to whoever called the method ( the object)
      return bindFunction;
    },
  };
  return adjustedMethod; // and then we return the adjusted method
}
