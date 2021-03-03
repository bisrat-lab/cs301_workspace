/* eslint-disable quotes */
/* eslint-disable strict */
//functions_tests.js
"use strict";


const assert = require("assert");
// eslint-disable-next-line camelcase
const my_functions = require('./my_functions.js');


describe("checkPrime", function () {
    it("37 is prime", function () {
        // eslint-disable-next-line camelcase
        assert.strictEqual(my_functions.checkPrime(37), true);
    });
    it(" 77 is not prime", function () {
        // eslint-disable-next-line camelcase
        assert.strictEqual(my_functions.checkPrime(77), false);
    });
});

