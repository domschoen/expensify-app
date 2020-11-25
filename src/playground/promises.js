const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        //resolve('This is my resolved data');

        reject('Something went wrong'); // will throw an exception after 1.5s
        // This below line is ignored because we can resolve only a single time
        // and either resolve or reject
        resolve('This is my other resolved data');
    }, 1500)
});

console.log('Request sent')

promise.then((data) => {
    console.log('1', data);
}, (error) => {
    console.log('error', error);
});

/* long syntax for the catch but clearer !!!
promise.then((data) => {
    console.log('1', data);
}).catch((error) => {
    console.log('error', error);
})
*/

/* you can attach more than one "then" to a promise
promise.then((data) => {
    console.log('2', data);
});
*/

console.log('After')
