'use strict';

module.exports = {

    aritGeo: function (arrays) {
        if (arrays.length === 0) {
            return 0;
        } else {
            for (var i in arrays) {
                var arit_difference = arrays[1] - arrays[0];
                var geo_difference = arrays[1] / arrays[0];
            }
            if (arrays[i] - arrays[i - 1] === arit_difference) {

                return "Arithmetic";
            }
            else if (arrays[i] / arrays[i - 1] === geo_difference) {

                return "Geometric";
            }

        }

        return -1;
    }
}