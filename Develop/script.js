// Assignment code here
var lengthChoices = "";
var upperCaseChoices = ('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
var lowerCaseChoices = ('abcdefghijklmnopqrstuvwxyz');
var numberChoices = ('12345678910');
var specialCharChoices = ('!@#$%^&*()-_=+');
var combinedChoices = [];


var arrayUpperCase = upperCaseChoices.split('');
var arrayLowerCase = lowerCaseChoices.split('');
var arrayNumber = numberChoices.split('');
var arraySpecial = specialCharChoices.split('');

//

//



//








// Get references to the #generate element


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  if (password){
  var newPassword = arrayCreation();
  var newPasswordText = document.querySelector("#password");
  newPasswordText.textContent = ('Your new password is\n' + newPassword);
  //newPasswordText.value = newPassword;
  } else {
    window.alert("You messed up! Please select a password length between 8 and 128 characters.")
  }
}

function arrayCreation() {
  var password = "";
  for (var i = 0; i < lengthChoices; i++) {
    var indexVal = Math.floor(Math.random() * combinedChoices.length);
    password = password + combinedChoices[indexVal];
  }

}

var generatePassword = function() {
  lengthChoices = window.prompt("How long do you want your password to be?\n(Between 8 and 128 Characters");
  if (lengthChoices > 8 && lengthChoices < 128){
    if (window.confirm("Do you want to include Uppercase letters?")){
      combinedChoices = combinedChoices.concat(arrayUpperCase)
    }
    if (window.confirm("Do you want to include Lowercase letters?")){
      combinedChoices = combinedChoices.concat(arrayLowerCase)
    }
    if (window.confirm("Do you want to include Numbers?")){
    combinedChoices = combinedChoices.concat(arrayNumber)
    }
    if (window.confirm("Do you want to include Special Characters?\n(Such as !, @ or %?)")){
      combinedChoices = combinedChoices.concat(arraySpecial)
    }
   return true
  }
  else {
    window.alert("Please select a valid password length and at least one character type!")
  }
}


var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);






//Add event listener to generate button
