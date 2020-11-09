console.log('utils is running');

//const square = (x) => x * x;
//const add = (a, b) => a + b;
//
//// named exports
//export { square, add };

export const square = (x) => x * x;
export const add = (a, b) => a + b;

export default (a,b) => a - b;

// only 1 default
//export { square, add, substract as default };

