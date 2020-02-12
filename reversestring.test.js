const reverseString = require('./reversestring');

test('reverseString function exists', () => {
    expect(reverseString).toBeDefined();
});

// reverse string

test('String reverses', () => {
    expect(reverseString('hello')).toEqual('olleh');
});

// reverse string with uppercase

test('String reverses with uppercase', () => {
    expect(reverseString('Hello')).toEqual('olleh');
})