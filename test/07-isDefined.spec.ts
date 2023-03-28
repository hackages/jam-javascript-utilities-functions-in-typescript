import {isDefined} from '../src';

describe('isDefined', function () {
    it('Happy path', function () {
        expect(isDefined([])).toEqual(true);
        expect(isDefined(12)).toEqual(true);
        expect(isDefined(0)).toEqual(true);
        expect(isDefined(false)).toEqual(true);
        expect(isDefined({})).toEqual(true);
        expect(isDefined([])).toEqual(true);
    });

    it('Should return false when the value is not defined', () => {
        let items;
        expect(isDefined(items)).toEqual(false);
    });
});
