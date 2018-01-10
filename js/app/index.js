/**
 * Created by Mahmoud on 09/01/2018.
 */

// function to be called when clicking on the submit button
document.getElementById("submit").addEventListener("click", function(){

    // read user input
    input = document.getElementById("numb").value;

    // validate user input
    var n = validateInput(input);

    // check if the input is valid or invalid and return the respective message
    if (n==-1){
        // display a message notifying the user of the invalid input
        document.getElementById("output").innerHTML =  "'"+ input +"' is not a valid input! Please Enter an Integer number greater or equal to one.";
    } else {
        // generate n primes
        var primes = generatePrimes(n);

        // generate the multiplication matrix
        var matrix = generateMultiplicationMatrix(primes);

        // generate the html table that holds the values of the multiplication matrix
        var matrixHtmlTable = printMatrix(matrix);

        // display the table on the home page
        document.getElementById("output").innerHTML =  matrixHtmlTable;
    }
});

