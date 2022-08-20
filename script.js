// Assignment code here
var nums = ["1", "2", "3", "4"]
var uppercase = ["A", "B", "C"]
var lowercase = ["a", "b"]
var symbols = ["#", "*", "!"]
var passwordoptions = []
function generatePassword() {
  var finalpassword=[]
  var length = prompt("how many characters do you want your password to be")
  console.log(length)
  if (length < 8) {
    alert("password length too short")
    return null
  }
  if (length > 128) {
    alert("password length too long")
    return null
  }
  var hasnumbers = confirm("do you want numbers in your password")
  var hasuppercase = confirm("do you want uppercase in your password")
  var haslowercase = confirm("do you want lowercase in your password")
  var hassymbols = confirm("do you want symbols in your password")
  if (hasnumbers === true) {
    passwordoptions = passwordoptions.concat(nums)
  }
  if (hasuppercase === true) {
    passwordoptions = passwordoptions.concat(uppercase)
  }
  if (haslowercase === true) {
    passwordoptions = passwordoptions.concat(lowercase)
  }
  if (hassymbols===true){
    passwordoptions=passwordoptions.concat(symbols)
     }
     console.log(passwordoptions)
     for(var i=0; i<length;i++){
      finalpassword.push(passwordoptions[])
    }
    console.log(finalpassword)
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
