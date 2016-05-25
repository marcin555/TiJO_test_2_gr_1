describe('app', function ()
{
'use strict';
var app = window.app;
describe('reverseNumber', function () {
it('should reverse the number', function () {
expect(app.reverseNumber(1234)).toEqual(4321);
expect(app.reverseNumber(5912)).toEqual(2195);
});
it('should reverse the number from "number string"', function () {
expect(app.reverseNumber('3334434')).toBe(3344334);
expect(app.reverseNumber('9866752')).toBe(2576689);
});

it('should not return a string.', function () {
expect(app.reverseNumber(1234)).not.toBe([4,2,3,4]);
expect(app.reverseNumber(9862)).not.toBe({a:2, b:6});
});

it('should not accept not number as an argument.', function () {
expect(app.reverseNumber([2,5])).toEqual(false);
expect(app.reverseNumber({a:2, b:4})).toEqual(false);
});

it('should return single number', function () {
expect(app.reverseNumber(5)).toBe(5);
expect(app.reverseNumber(8)).toBe(8);
});
});
});
