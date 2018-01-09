/**
 * Created by Mahmoud on 09/01/2018.
 */

var testApp = {
    /**
     * Method to validate user inputs
     * @param x is the input value
     * @returns the input value if it was an integer value >= 1 (valid) otherwise it returns -1 (invalid)
     */
    validateInput: function(x) {
        // if x isn't a number or not an Integer value or less than 1
        if (isNaN(x) || x % 1 !== 0 || x <1){
            return -1;
        }
        else{
            return x;
        }
    },
    /**
     * Method to check if an integer value is a prime number
     * @param n is an integer value
     * @returns {boolean} true if the passed value is a prime number, false if not prime
     */
    isPrime: function(n) {
        return true;
    }
};

describe("input validation", function() {

    it("should be defined", function() {
        expect(testApp.validateInput()).toBeDefined;
    });

    it("returns -1 if not a number", function() {
        expect(testApp.validateInput("test")).toEqual(-1);
    });

    it("returns -1 if not an integer", function() {
        expect(testApp.validateInput(2.2)).toEqual(-1);
    });

    it("returns -1 if less than one", function() {
        expect(testApp.validateInput(0)).toEqual(-1);
    });
});

describe("prime validator",function () {
    it("should be defined", function() {
        expect(testApp.isPrime()).toBeDefined;
    });

    it("returns false if not a prime", function() {
        expect(testApp.isPrime(1)).toBe(false);
        expect(testApp.isPrime(6)).toBe(false);
        expect(testApp.isPrime(33)).toBe(false);
        expect(testApp.isPrime(100)).toBe(false);
    });

})