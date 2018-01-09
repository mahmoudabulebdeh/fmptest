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