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
        return x;
    }

};

describe("input validation", function() {

    it("should be defined", function() {
        expect(testApp.validateInput()).toBeDefined;
    });

});