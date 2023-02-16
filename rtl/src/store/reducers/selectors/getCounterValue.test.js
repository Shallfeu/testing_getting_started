import { getCounterValue } from './getCounterValue/getCounterValue';

describe('getCounterValue', () => {
    test('work with empty state', () => {
        expect(getCounterValue({})).toBe(0);
    });
});
