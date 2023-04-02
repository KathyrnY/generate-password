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
  } else (char != null) 
    alert('Please enter a number')
  }
  
  return '';

// assigned variables
  var lowerCase = 'abcdefghijklmnopqrstuvwxz';
  var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var numeric ='0123456789';
  var special = '!@#$%^&*()+';
  var genPassword = '';
  // variable to encapsulate all variables together to generate password
  var all = '';

 if (confirm('Would you like lowercase letters in your password?')) {
 all +=  lowerCase
  }

  if (confirm ('Would you like uppercase letters in your password?')) {
  all += upperCase
  }

  if (confirm ('Would you like numbers in your password?')) {
    all += numeric
  }

  if (confirm ('Would you like special characters in your password?')) {
    all += special
  }





// Write password to the #password input
function writePassword(genPassword) {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

