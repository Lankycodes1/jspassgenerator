
//Assignment code
var generateBtn = document.querySelector("#generate");

// Generate a random integer between min and max //
function getRandomInt(min,max) {
    return Math.floor(Math.random() * (max-min +1)) +min;

}

//Generate a password based on user criteria //
function generatePassword() {
    //Defining character sets //
    var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numericChars = "0123456789"
    var specialChars ="!@#$%^&*()><.?/|+_-";



//promt for password criteria //
var length = parseInt(prompt("Choose a password length between 8 and 128 characters:"));

// conditions for password //
if (isNaN(length) || length < 8 || length > 128) {
    alert("please enter a valid password between length of 8 and 128 characters.");
    return "";

}
var includeLowercase = confirm("Include lowercase letters?");
var includeUppercase = confirm("Include uppercase letters?");
var includeNumeric = confirm("Include numeric characters?");
var includeSpecial = confirm("Include special characters?");

 if (!(includeLowercase || includeUppercase || includeNumeric || includeSpecial)) {
    alert("Please select at least one charavter type for the password");
 }

// create a character set based on user selection //
var charSet = "";
if (includeLowercase) {
    charSet+=lowercaseChars;
}

if (includeUppercase) {
    charSet += uppercaseChars;
}

if (includeNumeric) {
    charSet += numericChars;
}
if (includeSpecial) {
    charSet +=specialChars;

}
// generate a password //
var password = "";
for (var i = 0; i < length; i++) {
    var randomIndex = getRandomInt(0, charSet.length -1);
    password += charSet.charAt(randomIndex);

}
return password;
}

// write password to passpword input 
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
}

// Add event listener to generate buttom
generateBtn.addEventListener("click", writePassword)