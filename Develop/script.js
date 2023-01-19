// Assignment code here
var lengthChoices = [8, 9, 10, 11, 12, 13, 14, 15, 16];
var upperCaseChoices = ('ABCDEFGHIJKLMNOPQRSTUVWXYZ').split;
var lowerCaseChoices = ('abcdefghijklmnopqrstuvwxyz').split;
var numberChoices = ('12345678910').split;
var specialCharChoices = ('!@#$%^&*()-_=+').split;


//
var randomUpperCase = function() {
  if (upperCase == true) {
  Math.floor(Math.random() * upperCaseChoices.length);
  }
}

var randomLowerCase = function() {
  if (lowerCase == true) {
    Math.floor(Math.random() * lowerCaseChoices.length);
  }
}

var randomNumber = function() {
  if (numbers == true) {
  Math.floor(Math.random() * numberChoices.length);
  }
}

var randomSpecial = function() {
  if (special == true) {
  Math.floor(Math.random() * specialCharChoices.length);
  }
}
//

var passwordLength = window.prompt("How long do you want your password to be?\n(Between 8 and 16 Characters)");

var upperCase = window.confirm("Would you like to include uppercase letters?");
var lowerCase = window.confirm("Would you like to include lowercase letters?");
var numbers = window.confirm("Would you like to include numbers?");
var special = window.confirm("Lastly, would you like to include special characters?\nSuch as @, %, or &?");

//
var criteriaEntry = function() {
  randomUpperCase();
  randomLowerCase();
  randomNumber();
  randomSpecial();
  criteriaEntry() * [passwordLength];
}


var generatePassword = function() {
  if (
    (upperCase == false) ||
    (lowerCase == false) ||
    (numbers == false) ||
    (special == false)
    ) {
    window.alert("Please select proper parameters for your password\n(Most websites require all types of letters now)\nPlease reload and retry");
    return;

  } else {
    (upperCase == true) &&
    (lowerCase == true) &&
    (numbers == true) &&
    (special == true)
  } {
    criteriaEntry();
    window.alert("Your new password is\n" + criteriaEntry);
    }
}

var password = generatePassword();
var passwordText = document.querySelector("#password");


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);


// Write password to the #password input
function writePassword() {
  passwordLength = window.prompt("How long do you want your password to be?\n(Between 8 and 16 Characters)");
  var upperCase = window.confirm("Would you like to include uppercase letters?");
  randomUpperCase();
  var lowerCase = window.confirm("Would you like to include lowercase letters?");
  randomLowerCase();
  var numbers = window.confirm("Would you like to include numbers?");
  randomNumber();
  var special = window.confirm("Lastly, would you like to include special characters?\nSuch as @, %, or &?");
  randomSpecial();

  var criteriaEntry = function() {
    ((upperCase == randomUpperCase())(lowerCase == randomLowerCase())(numbers == randomNumber())(special == randomSpecial()) * passwordLength);
  }

  generatePassword();
  
      criteriaEntry();
      window.alert("Your new password is\n" + criteriaEntry);
  
  
}






// Add event listener to generate button
generateBtn.addEventListener("click", writePassword());