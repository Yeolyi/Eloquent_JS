let obj = { hasOwnProperty : "own", test: 123  };
console.log(obj.hasOwnProperty);
console.log(Object.prototype.hasOwnProperty.call(obj, "test"));
