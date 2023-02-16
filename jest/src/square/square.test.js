const square = require('./square');

describe('square', () => {
    let mockValue;

    beforeEach(() => {
        mockValue = Math.random();
    });

    beforeAll(() => {});

    test('correct value', () => {
        expect(square(2)).toBe(4);
        expect(square(2)).toBeLessThan(5);
        expect(square(2)).toBeGreaterThan(3);
        expect(square(2)).not.toBeUndefined();
    });

    test('Mock', () => {
        const spyMathPow = jest.spyOn(Math, 'pow');
        square(1);
        expect(spyMathPow).toBeCalledTimes(0);
    });

    afterEach(() => {});

    afterAll(() => {});
});
