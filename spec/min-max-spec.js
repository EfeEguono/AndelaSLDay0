'use strict';

var myApp = require('../app/min-max.js');

(function () {

  describe('Min-Max Numbers in a List: ', function () {

    describe('Return the min and max number in the list in a new list follows `[min, max]`', function () {
      it('should return [1,4] for [1, 2, 3 , 4]', function () {
        expect(myApp.findMinMax([1, 2, 3, 4])).toEqual([1, 4]);
      });

      it('should return [1,4] for [1, 2, 3 , 4]', function () {
        expect(myApp.findMinMax([1, 2, 3, 16])).toEqual([1, 16]);
      });

      it('should return [4, 6] for [6, 4]', function () {
        expect(myApp.findMinMax([6, 4])).toEqual([4, 6]);
      });

      it('should return [4, 6, 28] for [6, 4]', function () {
        expect(myApp.findMinMax([6, 4, 28])).toEqual([4, 28]);
      });

      it('should return [-4, 6] for [6, 4]', function () {
        expect(myApp.findMinMax([6, -4, 28])).toEqual([-4, 28]);
      });

      it('should return [6, 4, 4, 28] for [6, 4]', function () {
        expect(myApp.findMinMax([6, 4, 4, 28])).toEqual([4, 28]);
      });

      it('should return [6, 2, 2, 54, 54] for [2, 54]', function () {
        expect(myApp.findMinMax([6, 2, 2, 54, 54])).toEqual([2, 54]);
      });

      it('should return [20, 780] for [4, 66, 6, 44, 7, 78, 8, 68, 2]', function () {
        expect(myApp.findMinMax([40, 66, 69, 44, 780, 78, 89, 68, 20])).toEqual([20, 780]);
      });

      it('should return [2, 78] for [4, 66, 6, 44, 7, 78, 8, 68, 2]', function () {
        expect(myApp.findMinMax([4, 66, 6, 44, 7, 78, 8, 68, 2])).toEqual([2, 78]);
      });
    });

    describe('Return the number in the list in a new list follows `[min]` when the number is the min and max number in that list', function () {

      it('should return [4] for [4, 4, 4, 4]', function () {
        expect(myApp.findMinMax([4, 4, 4, 4])).toEqual([4]);
      });

    });

  });

})();