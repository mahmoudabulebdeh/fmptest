/**
 * Created by Mahmoud on 10/01/2018.
 */

/**
 * Method to validate user inputs
 * @param x is the input value
 * @returns the input value if it was an integer value >= 1 (valid) otherwise it returns -1 (invalid)
 */
function validateInput(x) {
    // if x isn't a number or not an Integer value or less than 1
    if (isNaN(x) || x % 1 !== 0 || x <1){
        return -1;
    }
    // if x is a valid Integer number
    else{
        return x;
    }
}

describe("input validation", function() {

    it("should be defined", function() {
        expect(validateInput()).toBeDefined;
    });

    it("returns -1 if not a number", function() {
        expect(validateInput("test")).toEqual(-1);
    });

    it("returns -1 if not an integer", function() {
        expect(validateInput(2.2)).toEqual(-1);
    });

    it("returns -1 if less than one", function() {
        expect(validateInput(0)).toEqual(-1);
    });
});