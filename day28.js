const createLoggingProxy = (target) => {
  return new Proxy(target, {
    get: function (target, property, receiver) {
      console.log(`Accessed property: ${property}`);
      return Reflect.get(target, property, receiver);
    },
  });
};

const originalObject = { name: "John", age: 25 };

const loggingProxy = createLoggingProxy(originalObject);

console.log(loggingProxy.name);
console.log(loggingProxy.age);
