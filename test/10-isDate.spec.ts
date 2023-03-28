import {isDate} from '../src';

describe('isDate', () => {
    it('Should return true when passed a date', function() {
        expect(isDate(new Date('12/12/2017'))).toEqual(true);
    });
    it('Should return false otherwise', function() {
        expect(isDate({})).toEqual(false);
        expect(isDate([])).toEqual(false);
        expect(isDate(NaN)).toEqual(false);
        expect(isDate(12)).toEqual(false);
        expect(isDate('')).toEqual(false);
        expect(isDate('string')).toEqual(false);
        expect(isDate('01/01/2001')).toEqual(false);
    });
});
