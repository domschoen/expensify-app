const add = (a,b) => a + b;
const generateGreeting = (name = 'Anonymous') => `Hello ${name}!`;

/* ok but with boiler code
test('should add two numbers', () => {
    const result = add(3,4);
    if (result !== 7) {
        throw new Error(`You add 4 and 3. The result was ${result}. Expect 7`);
    }
});*/

// See API Reference > Globals
test('should add two numbers', () => {
    const result = add(3,4);
    // See API Reference > Expect
    expect(result).toBe(7);
});

test('should generate greeting from name', () => {
    const result = generateGreeting('Toto');
    expect(result).toBe('Hello Toto!');
});

test('should generate greeting from no name', () => {
    const result = generateGreeting();
    expect(result).toBe('Hello Anonymous!');
});