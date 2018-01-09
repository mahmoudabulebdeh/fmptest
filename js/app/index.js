/**
 * Created by Mahmoud on 09/01/2018.
 */

// function to be called when clicking on the submit button
document.getElementById("submit").addEventListener("click", function(){

    // read user input
    input = document.getElementById("numb").value;

    // validate user input
    var validation = app.validateInput(input);

    // check if the input is valid or invalid and return the respective message
    if (validation==-1){
        var message = "'"+ input +"' is not a valid input! Please Enter an Integer number greater or equal to one.";
        alert(message);
    } else {
        alert("valid input!");
    }
});

// main functionality
var app = {

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
        // if x is a valid Integer number
        else{
            return x;
        }
    }
}
