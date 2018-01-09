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
    }
};


/**
 * Method to check if an integer value is a prime number
 * @param n is an integer value
 * @returns {boolean} true if the passed value is a prime number, false if not prime
 */
function isPrime(n) {
    if(n<2)
        return false;
    for(x = 2; x<= Math.sqrt(n); x++){
        if(n%x==0){
            return false;
        }
    }
    return true;
}

/**
 * Method to generate a certain number of prime numbers
 * @param n is the number of primes to be generated
 * @returns {Array} an array of n numbers
 */
function generatePrimes(n) {
    var i=0;
    var primes = [];
    while(i<n){
        primes[i] = 0;
        i = i+1;
    }
    return primes;
}

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
        expect(isPrime()).toBeDefined;
    });

    it("returns false if not a prime", function() {
        expect(isPrime(1)).toBe(false);
        expect(isPrime(6)).toBe(false);
        expect(isPrime(33)).toBe(false);
        expect(isPrime(100)).toBe(false);
    });

    it("returns true for a prime input", function() {
        expect(isPrime(2)).toBe(true);
        expect(isPrime(5)).toBe(true);
        expect(isPrime(59)).toBe(true);
        expect(isPrime(137)).toBe(true);
    });
});

describe("primes generator",function () {
    it("should be defined", function() {
        expect(generatePrimes()).toBeDefined;
    });

    it("should returns n elements",function () {
        expect(generatePrimes(1).length).toEqual(1);
        expect(generatePrimes(9).length).toEqual(9);
        expect(generatePrimes(40).length).toEqual(40);
    })
});

