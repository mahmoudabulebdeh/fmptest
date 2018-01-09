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
        // if x isn't a number
        if (isNaN(x)){
            return -1;
        }
        else{
            return x;
        }
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
});