/**
 * Created by Mahmoud on 09/01/2018.
 */


// primes generator
var primesGenerator = {

    /**
     * Method to check if an integer value is a prime number
     * @param n is an integer value
     * @returns {boolean} true if the passed value is a prime number, false if not prime
     */
    isPrime: function(n) {
        if(n<2)
            return false;
        for(x = 2; x<= Math.sqrt(n); x++){
            if(n%x==0){
                return false;
            }
        }
        return true;
    }
}

