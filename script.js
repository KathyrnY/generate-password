// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var char = Number(
    prompt ('Enter the amount of characters you would in your password please.')
  );

  if (char < 8) {
  alert('Password must be between 8 and 128 characters.')
  } else if (char > 128) {
  alert('Password must be between 8 and 128 characters.')
  }
  // } else //(char != null) 
  // {
  //   alert('Please enter a number')
  // }
  return '';

}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

