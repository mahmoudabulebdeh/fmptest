/**
 * Created by Mahmoud on 09/01/2018.
 */


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
 * @returns {Array} an array of n prime numbers, starting from 2
 */
function generatePrimes(n) {
    var i=0;
    var x=2;
    var primes = [];
    while(i<n){
        if(isPrime(x)==true){
            primes[i] = x;
            i = i+1;
        }
        x = x+1;
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
    });

    it("should returns n primes starting from 2",function () {

        var generatedPrimes1 = generatePrimes(1);
        expect(generatedPrimes1[0]).toEqual(2);

        var generatedPrimes100 = generatePrimes(100);
        expect(generatedPrimes100[0]).toEqual(2);
        for(var i=0; i<generatedPrimes100.length; i++){
            expect(isPrime(generatedPrimes100[i])).toBe(true);
        }

        var generatedPrimes700 = generatePrimes(700);
        expect(generatedPrimes700[0]).toEqual(2);
        for(var i=0; i<generatedPrimes700.length; i++){
            expect(isPrime(generatedPrimes700[i])).toBe(true);
        }

        var generatedPrimes1000= generatePrimes(1000);
        expect(generatedPrimes1000[0]).toEqual(2);
        for(var i=0; i<generatedPrimes1000.length; i++){
            expect(isPrime(generatedPrimes1000[i])).toBe(true);
        }
    });
});

