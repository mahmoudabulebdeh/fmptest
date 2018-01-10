
/**
 * Created by Mahmoud on 09/01/2018.
 */

// function to be called when clicking on the submit button
document.getElementById("submit").addEventListener("click", function(){

    // read user input
    input = document.getElementById("numb").value;

    // validate user input
    var validation = validateInput(input);

    // check if the input is valid or invalid and return the respective message
    if (validation==-1){
        var message = "'"+ input +"' is not a valid input! Please Enter an Integer number greater or equal to one.";
        alert(message);
    } else {
        var primes = generatePrimes(input);
        alert("Thanks for the valid input, " +primes.length+ " primes has been generated!");
        console.log(primes.toString());
    }
});
