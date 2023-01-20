// Assignment code here
var lengthChoices = 0;
var upperCaseChoices = ('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
var lowerCaseChoices = ('abcdefghijklmnopqrstuvwxyz');
var numberChoices = ('12345678910');
var specialCharChoices = ('!@#$%^&*()-_=+');

var arrayUpperCase = upperCaseChoices.split('');
var arrayLowerCase = lowerCaseChoices.split('');
var arrayNumber = numberChoices.split('');
var arraySpecial = specialCharChoices.split('');



// Get references to the #generate element


// Write password to the #password input
function writePassword() {
  var arrayOfChoices = generatePassword();
  console.log(arrayOfChoices)
  if (arrayOfChoices.length > 0) {
    var newPassword = arrayCreation(arrayOfChoices);
    console.log("if statement true")
    var newPasswordText = document.querySelector("#password");
    console.log(newPassword);
    newPasswordText.textContent = ('Your new password is\n' + arrayCreation(arrayOfChoices));
    //newPasswordText.value = newPassword;
  } else {
    window.alert("Please select a password length between 8 and 128 characters.")
  }
}

function arrayCreation(arrayOfChoices) {
  console.log(lengthChoices);
  var password = "";
  for (var i = 0; i < lengthChoices; i++) {
    var indexVal = Math.floor(Math.random() * arrayOfChoices.length);
    
    password = password + arrayOfChoices[indexVal];
    console.log(indexVal);
  }
  return password;
}

var generatePassword = function () {
  var combinedChoices = [];
  lengthChoices = parseInt(window.prompt("How long do you want your password to be?\n(Between 8 and 128 Characters"));
  console.log(lengthChoices);
  if (lengthChoices > 8 && lengthChoices < 128) {
    if (window.confirm("Do you want to include Uppercase letters?")) {
      combinedChoices = combinedChoices.concat(arrayUpperCase);
    }
    if (window.confirm("Do you want to include Lowercase letters?")) {
      combinedChoices = combinedChoices.concat(arrayLowerCase);
    }
    if (window.confirm("Do you want to include Numbers?")) {
      combinedChoices = combinedChoices.concat(arrayNumber);
    }
    if (window.confirm("Do you want to include Special Characters?\n(Such as !, @ or %?)")) {
      combinedChoices = combinedChoices.concat(arraySpecial);
    }
  }
  else {
    window.alert("Please select a valid password length and at least one character type!")
  }
  return combinedChoices;
}


var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);






//Add event listener to generate button
