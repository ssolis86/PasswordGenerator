// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var specialCharacters = "!@#$%^&*()-_+=".split("");
var numberS = "1234567890".split("");


// Write password to the #password input
function generatePassword() {
    var passLeng = prompt("Please select a length of characters between 8 - 128 characters");
    var uppCase = confirm("Do you want upper case letters?");
    var lwrCase = confirm("Do you want lower case characters?");
    var spcChar = confirm("Do you wnat special characters?");
    var numBrs = confirm("Do you want numbers included in your password?");

    console.log(passLeng);
    console.log(uppCase);
    console.log(lwrCase);
    console.log(spcChar);
    console.log(numBrs);
}



function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

