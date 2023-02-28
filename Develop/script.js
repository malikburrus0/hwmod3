// Assignment code here
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
function generatePassword(){
  var passwordLength = prompt("What is the length of the password?");
  console.log (passwordLength);
  if (passwordLength <8) {
    alert ("Must be minimum of 8 characters");
    return null;
  }
  if (passwordLength >128) {
    alert ("Must be maximum of 128 characters");
    return null;
  }
  var upperChoice = confirm ("Do you want upper-case?");
  var lowerChoice = confirm ("Do you want lower-case?");
  var specialChoice = confirm ("Do you want special characters?");
  var numChoice = confirm ("Do you want numbers?");
  //condition to check for at least one cofirmation choice
  console.log (upperChoice);
  var x = {
    passwordLength,
    lowerChoice,
    upperChoice,
    specialChoice,
    numChoice
  }
  return x;
};

// concatenate, push, randomizer, forloop, join, empty array

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
