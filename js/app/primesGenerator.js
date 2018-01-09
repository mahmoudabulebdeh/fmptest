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
