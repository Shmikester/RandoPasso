// Assignment code here
function generatePassword()
{
  var passwordLength = inputPasswordLength();
  var passwordCharacters = inputPasswordCharacters();
  var randomPassword = createPassword(passwordLength, passwordCharacters);

  return randomPassword;
}

//gets password length from user
function inputPasswordLength()
{
  var passwordLength = 0;
  var continueLoop = true;
  while (continueLoop)
  {
    passwordLength = prompt('How long should the password be? (character min 8, max 128');
    if (passwordLength >= 8 && passwordLength <= 128)
    {
      continueLoop = false;
    }
    else
    {
      alert("Invalid entry, please enter a valid password length");
    }
  };
  return passwordLength;
};

// gets what characters to include in the password
function inputPasswordCharacters()
{
  var userInput = '';
  var passwordCharacters = [];
  var continueLoop = true;

  var questions = ['Should the password contain lower case characters? (enter Y for yes and N for no)',
    'Should the password contain upper case characters? (enter Y for yes and N for no)',
    'Should the password contain numbers? (enter Y for yes and N for no)',
    'Should the password contain special characters? (enter Y for yes and N for no)']

  while (continueLoop)
  {
    for (let i = 0; i < 4; i++)
    {
      userInput = prompt(questions[i]);
      if (userInput.toLowerCase() === 'y')
      {
        switch (i)
        {
          case 0:
            passwordCharacters.push(getRandomLowerCaseLetter);
            break;
          case 1:
            passwordCharacters.push(getRandomUpperCaseLetter);
            break;
          case 2:
            passwordCharacters.push(getRandomNumber);
            break;
          case 3:
            passwordCharacters.push(getRandomSpecialCharacter);
            break;
        }
      }
      else if (userInput.toLowerCase() === 'n')
      {
        //do nothing
      }
      else
      {
        alert('Invalid answer, please use Y or N');
        passwordCharacters = [];
        i = -1;
      }
    }

    if (passwordCharacters === '')
    {
      alert("You need to have a least one 'type' of character selected");
    }
    else
    {
      continueLoop = false;
    }
  }

  return passwordCharacters;
}

//generates password
function createPassword(passwordLength, passwordCharacters)
{
  generatedPassword = '';
  passwordArrayLength = passwordCharacters.length;

  //ensures at least one of each character type that the user wants is in the password
  for (let i = 0; i < passwordArrayLength; i++) {
    generatedPassword = generatedPassword + passwordCharacters[i]();
  }

  //randomizes the rest of the password
  for (let i = passwordArrayLength; i < passwordLength; i++)
  {
    generatedPassword = generatedPassword + passwordCharacters[randomNumber(passwordArrayLength)]();
  }

  return generatedPassword;
}

function getRandomLowerCaseLetter()
{
  var characters = "abcdefghijklmnopqrstuvwxyz";
  var randomNum = randomNumber(characters.length) + 1;
  return characters.charAt(randomNum);
}

function getRandomUpperCaseLetter()
{
  var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var randomNum = randomNumber(characters.length) + 1;
  return characters.charAt(randomNum);
}

function getRandomNumber()
{
  var characters = "0123456789";
  var randomNum = randomNumber(characters.length) + 1;
  return characters.charAt(randomNum);
}

function getRandomSpecialCharacter()
{
  var characters = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
  var randomNum = randomNumber(characters.length) + 1;
  return characters.charAt(randomNum);
}

// random number generator
function randomNumber(max)
{
  var value = Math.floor(Math.random() * max);
  //console.log(value);
  return value;
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword()
{
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
