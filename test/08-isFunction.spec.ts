import {isFunction} from '../src';

describe('isFunction', function() {
    it('Should return true when passed an anonymous function', () => {
        expect(isFunction(function() {})).toEqual(true);
    });

    it('Should return true when passed a named function', () => {
        const sum = function(x: number, y: number): number {
            return x + y;
        };
        expect(isFunction(sum)).toEqual(true);
    });

    it('Should return true when passed a class', () => {
        class Book {}
        expect(isFunction(Book)).toEqual(true);
    });

    it('Should return false otherwise', () => {
        expect(isFunction({})).toEqual(false);
        expect(isFunction(12)).toEqual(false);
        expect(isFunction(undefined)).toEqual(false);
        expect(isFunction('Hacklunch')).toEqual(false);
        expect(isFunction([])).toEqual(false);
    });
});
