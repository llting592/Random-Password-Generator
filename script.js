// Assignment Code
var generateBtn = document.querySelector("#generate");

//variables for upper case letters, lower case letters, numerical characters and special characters
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numChar = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialChar = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];

// Write password to the #password input
//prompt for user to choose length of password
function generatePassword(){
  //User password length selection (between 8-128 characters) and to force user to pick a valid option
  var userLength = prompt("How long would you like your generated password to be? (Please choose a value between 8-128)");
  while (userLength < 8 || userLength > 128){
    alert("Please pick a value between 8-128");
    var userLength = prompt("How long would you like your generated password to be? (Please choose a value between 8-128)");
  }
  alert(`You have chosen the generated password to be ${userLength} characters`);
//variables for user confirmed choices in characters (uppercase, lowercase, num, special chars) and force user to pick at least 1 set of characters
var userUpperCase = confirm("Would you like your password to include upper case characters?");
if (userUpperCase){
  alert("You have chosen the generator to include upper case characters in your password");
}
var userLowerCase = confirm("Would you like your password to include lower case characters?");
if (userLowerCase){
  alert("You have chosen the generator to include lower case characters in your password");
}
var userNumChar = confirm("Would you like your password to include numerical characters?");
if (userNumChar){
  alert("You have chosen the generator to include numerical characters in your password");
}
var userSpecialChar = confirm("Would you like your password to include special characters?");
if (userSpecialChar){
  alert("You have chosen the generator to include special characters in your password");
}

while (!userUpperCase && !userLowerCase && !userNumChar && !userSpecialChar){
  alert("You must choose at least one set of characters in your password")
  var userUpperCase = confirm("Would you like your password to include upper case characters?");
  var userLowerCase = confirm("Would you like your password to include lower case characters?");
  var userNumChar = confirm("Would you like your password to include numerical characters?");
  var userSpecialChar = confirm("Would you like your password to include special characters?");
}

//to actually include the above choices to be eligible in generated password
var passwordChar = [];
      
if (userSpecialChar) {
  passwordChar = passwordChar.concat(specialChar);
}

if (userNumChar) {
  passwordChar = passwordChar.concat(numChar);
}
  
if (userLowerCase) {
  passwordChar = passwordChar.concat(lowerCase);
}

if (userUpperCase) {
  passwordChar = passwordChar.concat(upperCase);
}

  console.log(passwordChar)

  //for the page to actually generate and return a password based on the above choices
  var passwordOutput = "";
  
  for (var i = 0; i < userLength; i++) {
    passwordOutput = passwordOutput + passwordChar[Math.floor(Math.random() * passwordChar.length)];
    console.log(passwordOutput);
  }
  return passwordOutput;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
