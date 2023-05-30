const isPrime = require('./prime')

test('should return true if number is prime', () => {
    expect(isPrime(3)).toBe(true)
});

test('should return false if number is 4', () => {
    expect(isPrime(4)).toBe(false)
});

test('should return false if number is 1', () => {
    expect(isPrime(1)).toBe(false)
});

test('should return false if number is 21', () => {
    expect(isPrime(21)).toBe(false)
});
