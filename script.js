// Assignment Code
var generateBtn = document.querySelector("#generate");
var lower= ["a","b","c"]
var upper= ["A","B","C"]
var num= ["1","2","3"]
var spc= ["!","$","&"]
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
var generatePassword = function () {
  var choices= []
var pwLength= prompt("How long do you want your password?")
console.log (pwLength)

if (pwLength < 8 || pwLength > 128){
  alert("Password does not meet requirment")
  return
}

var pwLower= confirm("Do you want lowercase letters?")
console.log (pwLower)
if(pwLower === true) {
  choices= choices.concat(lower)
  console.log(choices)
}


var pwUpper= confirm("Do you want uppercase letters?")
console.log (pwUpper)


var pwNum= confirm("Do you want numbers?")
console.log (pwNum)




var pwSpc= confirm("Do you want special chars?")
console.log (pwSpc)

if(pwSpc === false && pwNum === false && pwUpper === false && pwLower === false){

alert ("Please Select a character type.")
return 
}

// for loop amount of character 
// math random 


}// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
